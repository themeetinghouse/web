set -e

PUBLIC_STATIC=$(git diff --name-only --cached -- public/static)
REPO=$(git diff --name-only --cached)

if [ "$PUBLIC_STATIC" == "$REPO" ] && [ -n "$PUBLIC_STATIC" ]; then
  echo "[skip-cd]" >> $HUSKY_GIT_PARAMS
fi
