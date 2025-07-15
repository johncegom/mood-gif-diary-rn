# Mood GIF Diary – MVP Tasks Breakdown

## 1. Mood-Based Visual Journaling

### 1.1 First Launch Modal

#### Tasks

- On first app open, check AsyncStorage for a "first launch" flag.
- Show modal or fullscreen info screen:
  - App logo (centered)
  - Title: "Welcome to Mood GIF Diary"
  - Body: "Log your daily mood with a GIF. No account required. Your entries stay on this device."
  - [Continue] button to dismiss and set flag.
- Use **react-native-paper** components for modal, button, and layout.

#### Acceptance Criteria

- Modal appears only on first launch.
- Modal content matches UI/UX spec.
- Dismissal sets flag in AsyncStorage.

#### Definition of Done

- Modal is visually consistent with design spec.
- Modal never reappears after first dismissal.
- AsyncStorage flag is set and checked reliably.
- All text and branding match UI/UX guidelines.

---

### 1.2 Search & Select Mood GIF

#### Tasks

- Implement search input for GIF keywords.
- Integrate **Giphy API** to fetch at least 10 results.
- Display results in a 3-column grid using **react-native-paper** and FlatList.
- Debounce search input (~300ms).
- Allow user to select a GIF (highlight selection, scale animation).
- Save mood entry (date, gifUrl, timestamp) to **AsyncStorage**.
- Show confirmation (Toast/snackbar) after saving.
- Only one entry allowed per calendar day.

#### Acceptance Criteria

- User can search and scroll through GIFs.
- At least 10 results are shown per search.
- Results load within 3 seconds.
- Only one mood entry allowed per day.
- Confirmation is shown after save.
- Timestamp uses local timezone.
- If already logged today, show "You’ve already logged today’s mood!"

#### Definition of Done

- GIF search and selection flow is smooth and matches UI/UX spec.
- Debounce and loading states work as expected.
- Only one entry per day is possible and enforced.
- Confirmation feedback is clear and consistent.
- Data is correctly persisted and retrieved from AsyncStorage.

---

### 1.3 Mood Calendar Display

#### Tasks

- Design monthly calendar view with GIF thumbnails using **react-native-paper**.
- Each day cell shows:
  - Thumbnail if entry exists
  - "+" icon if blank
- Add navigation arrows for month switching.
- Tapping a day opens modal with full GIF, timestamp, and option to replace GIF.
- Implement mini calendar preview (7-day horizontal strip) on home screen.

#### Acceptance Criteria

- Calendar shows current month by default.
- Each day cell displays correct state (thumbnail or "+").
- User can navigate between months.
- Tapping a day shows detail modal.
- Smooth transitions and persisted view.

#### Definition of Done

- Calendar UI matches design spec and is responsive.
- Navigation and transitions are smooth.
- Day detail modal displays correct data and allows GIF replacement.
- Mini calendar preview is visible and interactive on home screen.

---

## 2. Data Handling & Local-Only Persistence

### 2.1 Local Storage

#### Tasks

- Store entries in **AsyncStorage** using key pattern: `mood_YYYY-MM-DD`.
- Each entry: `{ gifUrl: string, timestamp: ISODate }`
- On app load, parse data for current month and render into calendar/grid.
- Handle storage errors gracefully.

#### Acceptance Criteria

- Entries persist after app restart.
- Only one entry per day is allowed.
- Data is only stored on device (no backend).
- On first launch, info modal/banner is shown.

#### Definition of Done

- All data is reliably saved and loaded from AsyncStorage.
- No duplicate entries for the same day.
- Error states are handled and surfaced to user if needed.
- No network or backend dependency for mood data.

---

## 3. UI/UX & Style Guide

#### Tasks

- Use color palette:
  - Primary: #6C63FF
  - Accent: #FF6F91, #A0E7E5
  - Background: #FFFFFF or #F9F9FB
  - Text: #333, #666, white on buttons
- Typography:
  - Title: 20–24pt bold
  - Body: 16pt
  - Small: 12pt
- Components:
  - Buttons: TouchableOpacity, large radius, soft shadows
  - Modals: Modal, background dimmed
  - Cards: View with elevation, rounded corners
  - Animations: react-native-reanimated or LayoutAnimation

#### Definition of Done

- All UI elements match the style guide.
- Consistent use of color, typography, and spacing.
- Animations and feedback are present where specified.

---

## 4. States & Feedback

#### Tasks

- Show loading spinner when fetching from Giphy.
- Show empty state text if no GIFs found.
- Conditional render: “You’ve already logged today’s mood!” if entry exists for today.
- Provide haptic feedback and animations on interactions.

#### Definition of Done

- All states (loading, empty, success, error) are handled and visible.
- User receives clear feedback for all actions.
- Haptic and animation feedback is present and consistent.

---

## Tech Stack Reference

- **React Native CLI**
- **react-native-paper** (UI components)
- **Giphy API** (GIF search)
- **AsyncStorage** (local data persistence)
- **react-native-vector-icons** (icons)
- **react-native-reanimated** or **LayoutAnimation** (animations)
