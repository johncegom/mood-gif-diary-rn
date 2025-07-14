# Mood GIF Diary – MVP Tasks Breakdown

## 1. Welcome Screen

### Tasks

- Design a simple welcome screen with app name and short description.
- Add navigation from welcome screen to main diary interface.
- Ensure welcome screen appears only on first launch (optional for MVP).

### Acceptance Criteria (A/C)

- User sees a welcome screen on app launch.
- Welcome screen clearly explains the app’s purpose.
- User can proceed to the main diary interface.

### Definition of Done (DoD)

- UI matches design mockup.
- Navigation works as expected.
- No major UI bugs on different screen sizes.

---

## 2. Add Mood Entry with GIF Search

### Tasks

- Create mood entry form with GIF search input.
- Integrate GIF search API (e.g., Giphy).
- Allow user to select a GIF from search results.
- Add optional text note input.
- Add "Save" button to submit entry.

### Acceptance Criteria (A/C)

- User can search for GIFs and select one.
- User can enter an optional note.
- User can save the entry for the current day.

### Definition of Done (DoD)

- GIF search returns relevant results.
- Selected GIF and note are displayed in entry preview.
- Entry is saved locally after submission.

---

## 3. Local Storage of Entries

### Tasks

- Implement local storage for mood entries (date, GIF URL, note).
- Ensure only one entry per day is saved.
- Handle storage read/write errors gracefully.

### Acceptance Criteria (A/C)

- Entries persist after app restart.
- Only one entry per day is allowed.

### Definition of Done (DoD)

- Entries are correctly saved and loaded.
- Duplicate entries for the same day are prevented.

---

## 4. View Past Mood Entries

### Tasks

- Design calendar or list view for past entries.
- Display GIF, note, and date for each entry.
- Allow navigation between days.

### Acceptance Criteria (A/C)

- User can view all past entries.
- Each entry shows correct GIF, note, and date.

### Definition of Done (DoD)

- UI displays entries in correct order.
- No crashes or missing data when viewing entries.

---

## 5. Restrict to One Entry Per Day

### Tasks

- Check if an entry exists for today before allowing new entry.
- Show message if user tries to add more than one entry per day.

### Acceptance Criteria (A/C)

- User cannot add more than one entry per day.
- User receives clear feedback if trying to add a second entry.

### Definition of Done (DoD)

- Logic prevents duplicate entries for the same day.
- User experience is smooth and error messages are clear.
