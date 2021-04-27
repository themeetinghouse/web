set -e

PUBLIC_STATIC=$(git diff --name-only --cached -- public/static)
REPO=$(git diff --name-only --cached)
COMMIT_MSG=$(cat $HUSKY_GIT_PARAMS)

SKIP_CD=$'\n[skip-cd]'

if [[ $COMMIT_MSG == "Merge branch 'master' of"* ]]; then
  echo "$SKIP_CD" >> $HUSKY_GIT_PARAMS
elif [ "$PUBLIC_STATIC" == "$REPO" ] && [ -n "$PUBLIC_STATIC" ]; then
  echo "$SKIP_CD" >> $HUSKY_GIT_PARAMS
fi