"use client";

import Sidebar from "@/components/customLayout";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/header";
import "../../src/app/globals.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#a5c422",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="A modern web application using Material UI with Next.js"
        />
        <meta name="author" content="Your Name" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Next.js with Material UI</title>
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Navbar />
          <div className=" " style={{display: 'flex'}}>
          <Sidebar />
          <div style={{display: 'inline-block', width:'100%', padding:'30px'}}>
          {children}  </div>        </div>

          </ThemeProvider>
      </body>
    </html>
  );
}
