# Pull request review decision

Input: a GitHub pull request that changes 3 files, adds 120 lines and removes 40, touches the auth middleware, has no new tests, and CI passed.

```json
{"decisions": {"q1": {"type": "yes_no", "answer": false, "probabilities": {"yes": 0.08, "no": 0.92}, "confidence": 0.9}, "q2": {"type": "score", "answer": 7, "probabilities": {"1": 0.01, "2": 0.02, "3": 0.03, "4": 0.05, "5": 0.1, "6": 0.18, "7": 0.32, "8": 0.2, "9": 0.07, "10": 0.02}, "confidence": 0.72}, "q3": {"type": "choice", "answer": "needs_security_review", "probabilities": {"approve": 0.05, "request_changes": 0.18, "needs_security_review": 0.77}, "confidence": 0.86}}}
```

Questions:

- q1 (yes_no): Is this PR safe to merge without human review?
- q2 (score 1-10): Risk level.
- q3 (choice: approve, request_changes, needs_security_review): Recommended action.
