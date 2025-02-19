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
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const [open, setOpen] = useState({}); // State for submenu expansion
  const [collapsed, setCollapsed] = useState(false); // State for sidebar collapse
  const router = useRouter()
  const menus = [

    {
      heading: null, // No heading for logout
      items: [
        { title: "Dashboard", url: "/", icon: <DashboardIcon /> },
      ],
    },
    {
      heading: "USER MANAGEMENT",
      items: [
        { title: "Users", url: "/admin/users", icon: <PeopleIcon /> },
        { title: "Service Provider", url: "/admin/ServiceProvider", icon: <BusinessIcon /> },
        { title: "Add Provider", url: "/admin/AddProvider", icon: <AddCircleIcon /> },
      ],
    },
    {
      heading: "SERVICE PROVIDERS",
      items: [
        { title: "Featured SP", url: "/admin/FeaturedSp", icon: <StarIcon /> },
        { title: "Pin Down SP", url: "/admin/PinDownSp", icon: <PushPinIcon /> },
      ],
    },
    {
      heading: "BOOKINGS MANAGEMENT",
      items: [
        { title: "TimeLine", url: "/admin/TimeLine", icon: <TimelineIcon /> },
        { title: "Bookings", url: "/admin/Bookings", icon: <ReceiptIcon /> },
      ],
    },
    {
      heading: "SERVICE MANAGEMENT",
      items: [
      
            { title: "Create Invoice", url: "/admin/CreateInvoice" , icon: <DescriptionIcon  />},
            { title: "Accounting Report", url: "/admin/AccountingReport" , icon: <DescriptionIcon  />},
            { title: "Refund Report", url: "/admin/RefundReport" , icon: <DescriptionIcon  />},
         
       
      ],
    },
    {
      heading: "DATA MANAGEMENT",
      items: [
        { title: "App Configuration", url: "/admin/AppConfiguration", icon: <AccountTreeIcon /> },
        { title: "Ticket Configuration", url: "/admin/TicketConfiguration", icon: <ConfirmationNumberIcon /> },
      ],
    },
    {
      heading: null, // No heading for logout
      items: [
        { title: "logout", url: "/", icon: <ExitToAppIcon /> },
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
          height: "130vh", // Full height
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
                      onClick={() => router.push(item.url)}
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