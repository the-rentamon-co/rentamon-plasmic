# Connection Status Page Redesign

## Overview
This redesign transforms the connection status page to display channel connections in a modern, intuitive hub-and-spoke layout inspired by your provided screenshot.

## What Changed

### Visual Design
1. **Hub Layout**: Channels are now organized around a central Rentamon hub
   - **Left Side (متصل شده)**: Connected channels with green indicators
   - **Right Side (قطع شده)**: Disconnected channels with red indicators
   - **Center**: Rentamon logo as the central hub

2. **Channel Cards**: Each channel displays:
   - Channel icon/logo
   - Channel name in Persian
   - Status badge (green checkmark for connected, red X for disconnected)
   - Clickable for disconnected channels to navigate to connection page

3. **Alert System**:
   - Red alert banner at top when channels are disconnected
   - Shows the first disconnected channel name dynamically

4. **Navigation**:
   - Close button (X) in top-left corner
   - Info button (i) in top-right corner for help

### Technical Implementation

#### Files Modified

1. **`components/StatusesConnectionsRedesigned.tsx`** (NEW)
   - Main React component handling the new UI
   - Fetches connection statuses from API endpoint
   - Manages channel state and navigation
   - Responsive design for mobile and desktop

2. **`components/plasmic/website_starter/PlasmicStatusesConnections2.module.css`**
   - Added new CSS classes for the redesigned layout:
     - `.connectionContainer` - Main container
     - `.connectedSide` - Left side for connected channels
     - `.disconnectedSide` - Right side for disconnected channels
     - `.centralHub` - Center hub with Rentamon logo
     - `.channelCard` - Individual channel card styling
     - `.statusBadge` - Status indicators
     - `.alertBanner` - Warning alert styling
     - And many more responsive styles

3. **`src/pages/statuses-2.tsx`**
   - Integrated the new component using Plasmic overrides
   - Preserves the Plasmic structure while replacing content

## API Integration

### Endpoint
```
POST https://gateway.rentamon.com/webhook/connection-statuses
```

### Expected Response Format
```json
[
  {
    "website": 2,
    "status": "true"
  },
  {
    "website": 3,
    "status": "false"
  }
]
```

### Website IDs
- 2: جاباما (Jabama)
- 3: جاجیگا (Jajiga)
- 4: شب (Shab)
- 6: اتاقک (Otaghak)
- 7: مهمانشو (Mihmansho)
- 8: هومسا (Homsa)

## User Interactions

### Connected Channels
- Display on the left side
- Green border and checkmark badge
- Non-clickable (already connected)
- Hover effect for visual feedback

### Disconnected Channels
- Display on the right side
- Red border and X badge
- **Clickable**: Navigates to `/connections?step={step_number}`
- More prominent hover effect to indicate clickability

### Navigation Steps
When clicking a disconnected channel, user is redirected to:
- جاباما (2) → step 1
- جاجیگا (3) → step 3
- شب (4) → step 5
- اتاقک (6) → step 7
- مهمانشو (7) → step 10
- هومسا (8) → step 9

## Responsive Design

### Desktop (>1200px)
- Three-column layout
- Large channel cards
- Prominent central hub

### Tablet (500px - 1200px)
- Adjusted spacing
- Medium-sized cards
- Compact hub

### Mobile (<500px)
- Single column or wrapped layout
- Smaller cards and icons
- Compact alert banner
- Touch-friendly buttons

## Features

### Loading State
- Displays loading spinner while fetching data
- Centered in container

### Error Handling
- Shows error message if API fails
- User-friendly Persian error text

### Dynamic Alert
- Alert banner shows first disconnected channel's name
- Only appears when there are disconnections
- Persian text with channel name interpolation

### Info Button
- Top-right corner
- Click to show help text in Persian
- Explains the page layout

### Close Button
- Top-left corner
- Returns to previous page using `router.back()`

## Future Enhancements (Optional)

1. **Connection Lines**: SVG lines connecting channels to hub (currently present but may need positioning adjustment)
2. **Animation**: Fade-in effects for channel cards
3. **Real-time Updates**: WebSocket integration for live status updates
4. **Tooltips**: Hover tooltips with connection details
5. **Filtering**: Filter by connected/disconnected status
6. **Search**: Search for specific channels

## Testing Checklist

- [ ] API endpoint returns correct data
- [ ] Connected channels display on left with green indicators
- [ ] Disconnected channels display on right with red indicators
- [ ] Clicking disconnected channel navigates to correct connection page
- [ ] Alert banner shows correct channel name
- [ ] Close button returns to previous page
- [ ] Info button displays help text
- [ ] Loading state shows while fetching
- [ ] Error state displays on API failure
- [ ] Mobile responsive design works correctly
- [ ] Desktop layout displays properly
- [ ] All Persian text displays correctly (RTL)

## Troubleshooting

### Issue: Channels not displaying
- Check API endpoint is accessible
- Verify response format matches expected structure
- Check browser console for errors

### Issue: Navigation not working
- Ensure Next.js router is properly imported
- Check that `/connections` route exists
- Verify step numbers are correct

### Issue: Styles not applying
- Clear browser cache
- Check CSS module imports
- Verify class names match between CSS and TSX

### Issue: Images not loading
- Check image URLs are accessible
- Verify CORS settings if needed
- Add fallback text for broken images

## Support

For questions or issues with this redesign, please refer to:
- Component file: `components/StatusesConnectionsRedesigned.tsx`
- Styles: `components/plasmic/website_starter/PlasmicStatusesConnections2.module.css`
- Page integration: `src/pages/statuses-2.tsx`

---

**Created**: Based on provided screenshot design
**API Endpoint**: https://gateway.rentamon.com/webhook/connection-statuses
**Framework**: Next.js + React + Plasmic
