"use client";

import { useState, useEffect } from "react";
import { Breadcrumbs, Typography, Link, Divider, Box, Skeleton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { usePathname } from "next/navigation";

const BreadcrumbsComponent = ({paths,title }) => {
  const pathname = usePathname();
  // const paths = pathname.split("/").filter((path) => path);
  console.log("paths---,>",paths)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, []);

  return (
    <Box sx={{ width: "100%", padding: 2, display: "flex", alignItems: "center" }}>
      {/* Heading */}
      {loading ? (
        <Skeleton variant="text" width={200} height={30} />
      ) : (
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
      )}

      {/* Divider */}
      <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 28 }} />

      {/* Breadcrumbs */}
      {loading ? (
        <Skeleton variant="text" width={300} height={20} />
      ) : (
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/" color="inherit" sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon sx={{ marginRight: 0.5, fontSize: "18px" }} />
          </Link>
          {paths.map((path, index) => (
            <Typography key={index} color={index === paths.length - 1 ? "text.primary" : "inherit"}>
              {path.replace(/-/g, " ")}
            </Typography>
          ))}
        </Breadcrumbs>
      )}
    </Box>
  );
};

export default BreadcrumbsComponent;
