import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Business as BusinessIcon,
  AddCircle as AddCircleIcon,
  Schedule as ScheduleIcon,
  Receipt as ReceiptIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
  Star as StarIcon, // For Featured SP
  PushPin as PushPinIcon, // For Pin Down SP
  Timeline as TimelineIcon, // For Timeline
  AccountTree as AccountTreeIcon, // For App Configuration
  ConfirmationNumber as ConfirmationNumberIcon, // For Ticket Configuration
} from "@mui/icons-material";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState({}); // State for submenu expansion
  const [collapsed, setCollapsed] = useState(false); // State for sidebar collapse

  const menus = [
    {
      heading: "USER MANAGEMENT",
      items: [
        { title: "Users", url: "/users", icon: <PeopleIcon /> },
        { title: "Service Provider", url: "/service-provider", icon: <BusinessIcon /> },
        { title: "Add Provider", url: "/add-provider", icon: <AddCircleIcon /> },
      ],
    },
    {
      heading: "SERVICE PROVIDERS",
      items: [
        { title: "Featured SP", url: "/featured-sp", icon: <StarIcon /> },
        { title: "Pin Down SP", url: "/pin-down-sp", icon: <PushPinIcon /> },
      ],
    },
    {
      heading: "BOOKINGS MANAGEMENT",
      items: [
        { title: "TimeLine", url: "/timeline", icon: <TimelineIcon /> },
        { title: "Bookings", url: "/bookings", icon: <ReceiptIcon /> },
      ],
    },
    {
      heading: "SERVICE MANAGEMENT",
      items: [
        {
          title: "Invoicing",
          icon: <DescriptionIcon />,
          submenus: [
            { title: "Create Invoice", url: "/create-invoice" },
            { title: "Accounting Report", url: "/accounting-report" },
            { title: "Refund Report", url: "/refund-report" },
          ],
        },
      ],
    },
    {
      heading: "DATA MANAGEMENT",
      items: [
        { title: "App Configuration", url: "/app-configuration", icon: <AccountTreeIcon /> },
        { title: "Ticket Configuration", url: "/ticket-configuration", icon: <ConfirmationNumberIcon /> },
      ],
    },
    {
      heading: null, // No heading for logout
      items: [
        { title: "logout", url: "/logout", icon: <ExitToAppIcon /> },
      ],
    },
  ];

  const handleClick = (title) => {
    setOpen((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Drawer
      sx={{
        width: collapsed ? 60 : 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? 60 : 250,
          boxSizing: "border-box",
          backgroundColor: "#201f2b", // Background color
          color: "#868aa8", // Font color
          transition: "width 0.3s ease",
          position: "relative",
          height: "100vh", // Full height
          overflow: "hidden", // Hide scrollbar
          "&:hover": {
            overflowY: "auto", // Show scrollbar on hover
          },
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#201f2b",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#9ed568",
            borderRadius: "10px",
          },
        },
      }}
      variant="permanent"
      anchor="left"
      className="sidebar"
    >
      {/* Button to toggle sidebar */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: "relative",
          top: "10px",
          right: collapsed ? 0 : 100,
          paddingBottom: "10px",
          zIndex: 1200,
          color: "#9ed568",
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Menu List */}
      <List>
        {menus.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Render Section Heading if it exists and sidebar is not collapsed */}
            {section.heading && !collapsed && (
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "10.79px",
                  padding: "1rem 1rem 0.5rem 1rem",
                  color: "#9ed568", // Heading font color
                }}
              >
                {section.heading}
              </Typography>
            )}

            {/* Render Section Items */}
            {section.items.map((item, itemIndex) => (
              <div key={item.title}>
                <ListItem disablePadding>
                  <Tooltip
                    title={collapsed ? item.title : ""}
                    placement="right"
                  >
                    <ListItemButton
                      onClick={() => item.submenus && handleClick(item.title)}
                      sx={{
                        justifyContent: collapsed ? "center" : "flex-start",
                        color: "#868aa8", // Font color
                        fontSize: "14.3px", // Font size
                        fontFamily: "Poppins, sans-serif", // Font family
                      }}
                    >
                      {item.icon}
                      {!collapsed && (
                        <>
                          <ListItemText primary={item.title} sx={{ ml: 2 }} />
                          {item.submenus && (
                            <IconButton color="secondary">
                              {open[item.title] ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )}
                            </IconButton>
                          )}
                        </>
                      )}
                    </ListItemButton>
                  </Tooltip>
                </ListItem>

                {/* Render Submenus if they exist and sidebar is not collapsed */}
                {item.submenus && !collapsed && (
                  <Collapse in={open[item.title]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.submenus.map((submenu) => (
                        <ListItem key={submenu.title} disablePadding>
                          <Link
                            href={submenu.url}
                            passHref
                            style={{ textDecoration: "none", width: "100%" }}
                          >
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText
                                primary={submenu.title}
                                sx={{
                                  color: "#868aa8", // Font color
                                  fontSize: "14.3px", // Font size
                                  fontFamily: "Poppins, sans-serif", // Font family
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;