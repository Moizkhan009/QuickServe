"use client";

import React, { useState, useEffect } from "react";
import { Card, Input, Button, Skeleton } from "@mui/material";
import { Scrollbar } from "react-scrollbars-custom";
import { StarOutline } from "@mui/icons-material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Sample data
const initialServiceProviders = [
  { id: "1", name: "SuperStar", logo: "https://via.placeholder.com/30" },
  { id: "2", name: "Greenbay", logo: "https://via.placeholder.com/30" },
  { id: "3", name: "Qatar Maid Service", logo: "https://via.placeholder.com/30" },
  { id: "4", name: "Rent A Maid", logo: "https://via.placeholder.com/30" },
  { id: "5", name: "N A K", logo: "https://via.placeholder.com/30" },
  { id: "6", name: "Golden Touch", logo: "https://via.placeholder.com/30" },
  { id: "7", name: "Adal Services", logo: "https://via.placeholder.com/30" },
  { id: "8", name: "EasyServe", logo: "https://via.placeholder.com/30" },
  { id: "9", name: "GHS", logo: "https://via.placeholder.com/30" },
  { id: "10", name: "Alada", logo: "https://via.placeholder.com/30" },
];

const initialFeaturedProviders = [
  { id: "6", name: "Golden Touch", logo: "https://via.placeholder.com/30" },
  { id: "7", name: "Adal Services", logo: "https://via.placeholder.com/30" },
  { id: "8", name: "EasyServe", logo: "https://via.placeholder.com/30" },
  { id: "9", name: "GHS", logo: "https://via.placeholder.com/30" },
  { id: "10", name: "Alada", logo: "https://via.placeholder.com/30" },
  { id: "1", name: "SuperStar", logo: "https://via.placeholder.com/30" },
  { id: "2", name: "Greenbay", logo: "https://via.placeholder.com/30" },
  { id: "3", name: "Qatar Maid Service", logo: "https://via.placeholder.com/30" },
  { id: "4", name: "Rent A Maid", logo: "https://via.placeholder.com/30" },
  { id: "5", name: "N A K", logo: "https://via.placeholder.com/30" },
];

// Service Provider Card Component
const ServiceProviderCard = ({ provider, index }) => (
  <Draggable draggableId={provider.id} index={index}>
    {(provided) => (
      <Card
        className="p-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-white rounded-lg mb-4"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <img src={provider.logo} alt={provider.name} className="w-12 h-12 rounded-full" />
        <span className="text-gray-800 font-semibold text-sm">{provider.name}</span>
        <StarOutline className="text-gray-500 ml-auto" />
      </Card>
    )}
  </Draggable>
);

const ServiceProviderList = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [featuredProviders, setFeaturedProviders] = useState([]);
  const [searchService, setSearchService] = useState(""); // Search state for Service Providers
  const [searchFeatured, setSearchFeatured] = useState(""); // Search state for Featured Providers
  const [showAllServiceProviders, setShowAllServiceProviders] = useState(false);
  const [showAllFeaturedProviders, setShowAllFeaturedProviders] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setServiceProviders(initialServiceProviders);
      setFeaturedProviders(initialFeaturedProviders);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);

  // Handle drag-and-drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList = result.source.droppableId === "serviceProviders" ? [...serviceProviders] : [...featuredProviders];
    const destinationList = result.destination.droppableId === "serviceProviders" ? [...serviceProviders] : [...featuredProviders];

    const [movedItem] = sourceList.splice(result.source.index, 1);
    destinationList.splice(result.destination.index, 0, movedItem);

    if (result.source.droppableId === "serviceProviders") {
      setServiceProviders(sourceList);
    } else {
      setFeaturedProviders(sourceList);
    }

    if (result.destination.droppableId === "serviceProviders") {
      setServiceProviders(destinationList);
    } else {
      setFeaturedProviders(destinationList);
    }
  };

  // Filter service providers based on search
  const filteredServiceProviders = serviceProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchService.toLowerCase())
  );

  const filteredFeaturedProviders = featuredProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchFeatured.toLowerCase())
  );

  // Show only the first 4 providers initially
  const displayedServiceProviders = showAllServiceProviders
    ? filteredServiceProviders
    : filteredServiceProviders.slice(0, 4);

  const displayedFeaturedProviders = showAllFeaturedProviders
    ? filteredFeaturedProviders
    : filteredFeaturedProviders.slice(0, 4);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-2 gap-8 p-8 bg-gray-50 min-h-screen">
        {/* Service Providers Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Service Providers</h2>
          <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} /> {/* Horizontal Line */}

          <Input
            className="w-full mb-4 border px-4 py-2 rounded-lg focus:ring focus:ring-[#9ed568]"
            placeholder="Search service providers..."
            value={searchService}
            onChange={(e) => setSearchService(e.target.value)}
          />
          <Scrollbar style={{ height: "60vh" }}>
            {loading ? (
              // Skeleton Loading for Service Providers
              <div className="space-y-4">
                {[...Array(4)].map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    height={80}
                    className="rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <Droppable droppableId="serviceProviders">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4">
                    {displayedServiceProviders.map((provider, idx) => (
                      <ServiceProviderCard key={provider.id} provider={provider} index={idx} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </Scrollbar>
          {filteredServiceProviders.length > 4 && (
            <Button
              className="w-full mt-4"
              variant="contained"
              style={{ backgroundColor: "#9ed568", color: "#fff" }}
              onClick={() => setShowAllServiceProviders(!showAllServiceProviders)}
            >
              {showAllServiceProviders ? "Show Less" : "Show More"}
            </Button>
          )}
        </div>

        {/* Featured Providers Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Featured Providers</h2>
          <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} /> {/* Horizontal Line */}

          <Input
            className="w-full mb-4 border px-4 py-2 rounded-lg focus:ring focus:ring-[#9ed568]"
            placeholder="Search featured providers..."
            value={searchFeatured}
            onChange={(e) => setSearchFeatured(e.target.value)}
          />
          <Scrollbar style={{ height: "60vh" }}>
            {loading ? (
              // Skeleton Loading for Featured Providers
              <div className="space-y-4">
                {[...Array(4)].map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    height={80}
                    className="rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <Droppable droppableId="featuredProviders">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4">
                    {displayedFeaturedProviders.map((provider, idx) => (
                      <ServiceProviderCard key={provider.id} provider={provider} index={idx} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </Scrollbar>
          {filteredFeaturedProviders.length > 4 && (
            <Button
              className="w-full mt-4"
              variant="contained"
              style={{ backgroundColor: "#9ed568", color: "#fff" }}
              onClick={() => setShowAllFeaturedProviders(!showAllFeaturedProviders)}
            >
              {showAllFeaturedProviders ? "Show Less" : "Show More"}
            </Button>
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

export default ServiceProviderList;