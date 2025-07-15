# MVP Backlog

## 🧩 Capability: Mood-Based Visual Journaling

Enable users to log and view daily moods using GIFs without needing an account.

---

### ✨ Feature 1: Search & Select Mood GIF

#### User Story 1.1

**As a user, I want to search for GIFs using keywords so I can find one that matches how I feel.**

**Acceptance Criteria:**

- Search input accepts text.
- Returns at least 10 GIFs from Giphy API.
- Results load within 3 seconds.
- Users can scroll and select a GIF.

#### User Story 1.2

**As a user, I want to select a GIF and log it as my mood for today, so I can build a visual diary.**

**Acceptance Criteria:**

- Only one mood entry allowed per calendar day.
- Save button confirms selection.
- Stored locally using AsyncStorage.
- Success toast/confirmation shown.

---

### ✨ Feature 2: Mood Calendar Display

#### User Story 2.1

**As a user, I want to see my logged moods in a monthly calendar view.**

**Acceptance Criteria:**

- Calendar shows current month by default.
- Each day cell shows a thumbnail if an entry exists.
- Days without entries show "+" icon.

#### User Story 2.2

**As a user, I want to tap on a day to view or edit my mood entry.**

**Acceptance Criteria:**

- Tapping shows full GIF and timestamp.
- Optionally allows replacing the GIF for that day.

#### User Story 2.3

**As a user, I want to browse past months to review my mood history.**

**Acceptance Criteria:**

- "<" and ">" buttons to switch months.
- Smooth transitions, persisted view.

---

### ✨ Feature 3: Local-Only Data Persistence

#### User Story 3.1

**As a user, I want my mood entries to be saved locally so I can view them later without an account.**

**Acceptance Criteria:**

- Entries stored in device with AsyncStorage.
- Each entry includes date, gifUrl, and timestamp.

#### User Story 3.2

**As a user, I want to know that my data is only stored on my device.**

**Acceptance Criteria:**

- On first launch, show info modal or banner: "Your mood diary is saved only on this device."
- Optional link to learn more.
