# Breaking-change detector

Flag route/handler signature changes that remove or rename a required parameter, or change a response shape callers rely on.

## What to look for
- Removed required parameters (callers sending them will be silently ignored).
- Renamed parameters or fields.
- Changed response shape or field types.
- Changed or removed endpoints.
- Type narrowing that breaks existing callers.