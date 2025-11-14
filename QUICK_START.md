# 🚀 Quick Start Guide

## Installation (One-Time Setup)

```bash
cd "d:\Rentamon\Plasmic\rentamon-plasmic"
npm install --legacy-peer-deps
```

## Run the Project

```bash
npm run dev
```

## View the Redesigned Page

Open browser: **http://localhost:3000/statuses-2**

---

## What You'll See

```
┌──────────────────────────────────────────────────────────┐
│  [X] Close              ⚠️ ALERT                [i] Help  │
│                                                           │
│     CONNECTED                                DISCONNECTED │
│       متصل                                      قطع شده  │
│                                                           │
│   ┌─────────┐                              ┌─────────┐   │
│   │ ✓ Icon  │          ┌─────────┐        │ ✕ Icon  │   │
│   │ جاباما  │──────────│RENTAMON │────────│  شب     │   │
│   └─────────┘          │  LOGO   │        └─────────┘   │
│                        └─────────┘                       │
│   ┌─────────┐                              ┌─────────┐   │
│   │ ✓ Icon  │                              │ ✕ Icon  │   │
│   │ جاجیگا  │                              │ اتاقک   │   │
│   └─────────┘                              └─────────┘   │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## Key Features

✅ **Connected channels** (green) on LEFT
✅ **Disconnected channels** (red) on RIGHT - CLICKABLE
✅ **Central hub** with Rentamon logo
✅ **Alert banner** shows disconnected channels
✅ **Responsive** - works on mobile, tablet, desktop
✅ **Real-time** - fetches from API

---

## File Locations

| Purpose | File Path |
|---------|-----------|
| Main Component | `components/StatusesConnectionsRedesigned.tsx` |
| Styles | `components/plasmic/website_starter/PlasmicStatusesConnections2.module.css` |
| Page | `src/pages/statuses-2.tsx` |

---

## API Endpoint

```
POST https://gateway.rentamon.com/webhook/connection-statuses
```

**Expected Response**:
```json
[
  {"website": 2, "status": "true"},
  {"website": 3, "status": "false"}
]
```

---

## Need Help?

1. Check `REDESIGN_COMPLETE.md` for full details
2. Check `CONNECTIONS_REDESIGN_README.md` for documentation
3. Check browser console for errors
4. Verify API endpoint is accessible

---

**That's it! You're ready to go! 🎉**
