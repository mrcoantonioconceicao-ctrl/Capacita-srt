# Security Specification & Threat Model — Capacita SRT Salomão

## 1. Data Invariants
- Each user profile `/users/{userId}` can only be read or written by the authenticated user matching `{userId}`.
- User progress documents `/users/{userId}/progress/data` can only be read, created, or updated by the authenticated user matching `{userId}`.
- Users cannot read or modify another student's profile or progress documents under any circumstances.
- Unauthenticated requests are completely rejected.

## 2. Dirty Dozen Security Payloads
1. **Cross-User Profile Read**: Attempting to fetch `/users/OTHER_USER_UID` as `USER_A` -> Expected `PERMISSION_DENIED`.
2. **Cross-User Progress Overwrite**: Attempting to write to `/users/OTHER_USER_UID/progress/data` as `USER_A` -> Expected `PERMISSION_DENIED`.
3. **Unauthenticated Read**: Attempting to read `/users/USER_A` without auth -> Expected `PERMISSION_DENIED`.
4. **Unauthenticated Write**: Attempting to write to `/users/USER_A` without auth -> Expected `PERMISSION_DENIED`.
5. **ID Injection Attack**: Passing oversized ID strings like `/users/VERY_LONG_GARBAGE_STRING_` -> Expected `PERMISSION_DENIED`.
6. **Global Document Query**: Attempting `collectionGroup('progress')` across all users -> Expected `PERMISSION_DENIED`.
7. **Direct System Catch-All Access**: Attempting to read `/random_collection/doc` -> Expected `PERMISSION_DENIED`.
8. **Fake Auth Claim**: Passing spoofed token fields without matching `request.auth.uid` -> Expected `PERMISSION_DENIED`.
9. **User Impersonation**: Attempting to mutate `userId` field to spoof another account -> Expected `PERMISSION_DENIED`.
10. **Delete User Profile**: Attempting to execute `deleteDoc` on `/users/{userId}` -> Expected `PERMISSION_DENIED`.
11. **Delete User Progress**: Attempting to execute `deleteDoc` on `/users/{userId}/progress/data` -> Expected `PERMISSION_DENIED`.
12. **Anonymous Data Harvesting**: Attempting to list all users -> Expected `PERMISSION_DENIED`.
