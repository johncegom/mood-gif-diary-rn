# UI/UX Design Specification

## 1. First Launch Modal (One-Time Info Screen)

- **Trigger:** On first app open (check via AsyncStorage flag)
- **Layout:** Modal or fullscreen view
  - App Logo (centered, ~96px)
  - **Title:** Welcome to Mood GIF Diary
  - **Body Text:** Log your daily mood with a GIF. No account required. Your entries stay on this device.
  - **Button:** [Continue] (primary)

**Components:**  
Modal, View (vertical stack), Image, Text, TouchableOpacity

---

## 2. Home Screen – Today’s Mood

### Layout

- **Container:** ScrollView or FlatList (with ListHeader)
- **Sections:**
  1. **Mood Entry Area**
  2. **Mini Calendar Overview**

### 2.1 Mood Entry Area

- **Title:** How are you feeling today? (bold, 20pt)
- **GIF Search Bar:**
  - TextInput with placeholder: "Search a GIF to express your mood..."
  - Search icon (react-native-vector-icons)
  - Debounced input (~300ms) for API call
- **GIF Grid:**
  - FlatList (3 columns)
  - Each item: TouchableOpacity wrapping Image (GIF thumbnail via Giphy)
  - Highlighted border/overlay when selected
  - Press triggers scale animation (Animated.View)
- **Save Mood Button:**
  - Initially disabled, enabled once a GIF is selected
  - TouchableOpacity with animation + haptic feedback
  - On press: Save to AsyncStorage + show Toast/snackbar

### 2.2 Mini Calendar Preview

- **Type:** Week strip or 7-day horizontal preview (FlatList)
- **Each cell:**
  - View square
  - Shows date number, thumbnail (if logged), “+” icon (if blank)
  - Tappable → opens full calendar or edit modal

---

## 3. Full Calendar Screen

- **Layout:** Full-screen view with header
  - Month + year title
  - Navigation arrows: `< July 2025 >`
- **Calendar Grid:**
  - 7 columns × 5–6 rows (react-native-calendars or custom grid)
  - Each cell: Rounded square (e.g., 48x48px), date number (top corner), thumbnail (GIF) centered, "+" icon if no entry, TouchableOpacity
  - On tap: Opens modal with full-size GIF preview, timestamp, and option to “Replace GIF” (reopens search flow)

**Components:**  
View, Text, Image, Modal, TouchableOpacity, Animated.View

---

## 4. Mood Detail Modal (Day Entry Viewer)

- **Opens from:** Calendar cell tap
- **Layout:**
  - GIF in center (Image with resizeMode="contain")
  - “Logged at: [timestamp]”
  - [Replace GIF] button (optional in MVP)
  - [Close] button/icon

---

## 5. Style Guide

### Colors

- **Primary:** #6C63FF (lavender)
- **Accent:** #FF6F91 (pink), #A0E7E5 (aqua)
- **Background:** #FFFFFF or #F9F9FB
- **Text:** #333, #666, white on buttons

### Typography

- **Title:** 20–24pt bold
- **Body:** 16pt normal
- **Small:** 12pt for dates or notes

### UI Components

- **Buttons:** TouchableOpacity, large corner radius, soft shadows
- **Modals:** Modal, background dimmed
- **Cards:** View with elevation, rounded corners
- **Animations:** react-native-reanimated or LayoutAnimation

---

## 6. Data Handling & Behavior

### Local Storage (AsyncStorage)

- **Key pattern:** mood_YYYY-MM-DD
- **Value:** JSON `{ gifUrl: string, timestamp: ISODate }`
- **On load:** Parse data for current month, render into calendar/grid

### States

- Loading spinner when fetching from Giphy
- Empty state text if no GIFs found
- Conditional render: “You’ve already logged today’s mood!”
