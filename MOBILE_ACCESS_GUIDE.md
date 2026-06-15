# How to Access Your Portfolio on Mobile with Live Server

## Overview
Your portfolio website is now fully responsive and can be accessed on mobile devices using VS Code Live Server. Both your laptop and mobile need to be on the same Wi-Fi network.

---

## Step 1: Start Live Server on Your Laptop

1. Open your portfolio project in VS Code
2. Right-click on `index.html` and select **"Open with Live Server"**
3. Your website will open in your default browser (usually at `http://127.0.0.1:5500`)

---

## Step 2: Find Your Laptop's IP Address

### On Windows (Using CMD):

1. **Open Command Prompt:**
   - Press `Windows Key + R`
   - Type `cmd` and press Enter

2. **Run ipconfig command:**
   - Type: `ipconfig` and press Enter
   - Look for **"IPv4 Address"** under "Wireless LAN adapter WiFi" (or your Wi-Fi adapter name)
   - Example: `192.168.1.100`

### Alternative: Using PowerShell
- Press `Windows Key` and type `PowerShell`
- Run: `ipconfig` and find your IPv4 address

---

## Step 3: Connect Mobile to Same Wi-Fi

- Make sure your mobile phone is connected to the **same Wi-Fi network** as your laptop
- Both devices must be on the same network for this to work

---

## Step 4: Open Website on Mobile

1. On your mobile phone's browser, navigate to:
   ```
   http://YOUR_LAPTOP_IP:5500/index.html
   ```

2. **Replace `YOUR_LAPTOP_IP` with your actual IP address**
   - Example: `http://192.168.1.100:5500/index.html`

---

## Complete Example

If your Windows `ipconfig` shows:
```
IPv4 Address . . . . . . . . . . . . : 192.168.x.xxx
```

Open this URL on mobile:
```
http://192.168.x.xxx:5500/index.html
```

---

## Troubleshooting

### ❌ Mobile says "Can't reach this page"
- ✅ Check: Both devices on same Wi-Fi? 
- ✅ Check: Live Server is running on laptop?
- ✅ Check: Correct IP address typed in mobile browser?
- ✅ Check: Windows Firewall not blocking? (See below)

### ❌ Windows Firewall might be blocking
1. Open **Windows Defender Firewall** (search in Windows)
2. Click **"Allow an app through firewall"**
3. Find and allow **"Node.js"** or **"Live Server"** (if applicable)

### ❌ Can't find IPv4 Address
- Run: `ipconfig /all` in Command Prompt for detailed information
- Look specifically for your Wi-Fi adapter name

### ❌ IP Address keeps changing
- Your router assigns dynamic IPs that may change
- Run `ipconfig` again to get the current IP

---

## Live Server Port Settings (if needed)

If Live Server uses a different port (not 5500):

1. **Check the URL** shown in VS Code when Live Server starts
2. It will display something like: `http://127.0.0.1:XXXXX`
3. Use that port number instead of 5500

### To configure Live Server settings:
1. In VS Code, press `Ctrl + ,` to open Settings
2. Search for "Live Server"
3. Find **"Live Server: Port"** and change if needed
4. Restart Live Server after changing

---

## Mobile Responsiveness Features

Your portfolio now includes:

✅ **Responsive Navbar** - Mobile menu toggle on small screens
✅ **Responsive Hero Section** - Text and image stack on mobile
✅ **Stacked Cards** - All cards display in single column on mobile
✅ **Touch-Friendly** - Larger buttons and interactive elements
✅ **Media Queries** - Optimized for 768px (tablets) and 480px (phones)
✅ **No Horizontal Scroll** - Content fits within screen width
✅ **Proper Font Sizes** - Readable on all screen sizes
✅ **Mobile Forms** - Keyboard-friendly form inputs

---

## Quick Reference

| Device | Breakpoint | Use Case |
|--------|-----------|----------|
| Desktop | > 768px | Full multi-column layout |
| Tablet | 768px - 481px | 1-column layout, optimized spacing |
| Phone | ≤ 480px | Extra compact, mobile-first design |

---

## Browser Testing on Mobile

Test your website on:
- ✅ Chrome (Android)
- ✅ Safari (iPhone/iPad)
- ✅ Firefox Mobile
- ✅ Samsung Internet
- ✅ Opera Mobile

---

## Tips for Best Mobile Experience

1. **Use 4G/5G or strong Wi-Fi** - For smooth loading
2. **Landscape and Portrait** - Test both orientations
3. **Check all sections** - Navbar, hero, about, skills, projects, contact, footer
4. **Test on different devices** - iPhone, Android, tablets
5. **Scroll smoothly** - Should have no horizontal scroll
6. **Touch responsively** - Try touching buttons and links

---

## FAQ

**Q: Why do I see different layouts?**
A: Your website has responsive breakpoints at 768px and 480px. Resize your window to see different layouts.

**Q: Can I test without Live Server?**
A: Yes, but you'd need to manually reload after changes. Live Server auto-reloads on file changes.

**Q: Why is the IP address 192.168.x.x?**
A: That's your local network IP. It's different from your public internet IP (used to access internet).

**Q: Can someone outside my Wi-Fi see my website?**
A: No, it's only accessible on your local network. Your mobile must be on the same Wi-Fi.

---

## Need Help?

If you encounter issues:
1. Verify both devices are on the same Wi-Fi
2. Restart Live Server
3. Check the exact IP with `ipconfig` command
4. Check Windows Firewall settings
5. Try connecting from another mobile device
6. Restart your Wi-Fi router

Enjoy testing your responsive portfolio! 🚀
