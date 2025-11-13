#!/usr/bin/env bash
set -euo pipefail

APP_URL="${APP_URL:-http://localhost:5000/health}"
MAX_RETRIES="${MAX_RETRIES:-15}"
SLEEP_SECONDS="${SLEEP_SECONDS:-2}"

echo "🔍 Checking application health at ${APP_URL}"

for attempt in $(seq 1 "${MAX_RETRIES}"); do
  status_code="$(curl -s -o /dev/null -w "%{http_code}" "${APP_URL}" || true)"

  if [[ "${status_code}" == "200" ]]; then
    echo "✅ Application healthy (HTTP 200) on attempt ${attempt}"
    exit 0
  fi

  echo "⏳ Attempt ${attempt}/${MAX_RETRIES}: status ${status_code}. Retrying in ${SLEEP_SECONDS}s..."
  sleep "${SLEEP_SECONDS}"
done

echo "❌ Application did not become healthy after ${MAX_RETRIES} attempts" >&2
exit 1

