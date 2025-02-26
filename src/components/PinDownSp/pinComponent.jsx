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

const Pincomponent = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [pinnedProviders, setPinnedProviders] = useState([]); // Initially empty
  const [searchService, setSearchService] = useState(""); // Search state for Service Providers
  const [searchPinned, setSearchPinned] = useState(""); // Search state for Pinned Providers
  const [showAllServiceProviders, setShowAllServiceProviders] = useState(false);
  const [showAllPinnedProviders, setShowAllPinnedProviders] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setServiceProviders(initialServiceProviders);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);

  // Handle drag-and-drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList = result.source.droppableId === "serviceProviders" ? [...serviceProviders] : [...pinnedProviders];
    const destinationList = result.destination.droppableId === "serviceProviders" ? [...serviceProviders] : [...pinnedProviders];

    const [movedItem] = sourceList.splice(result.source.index, 1);
    destinationList.splice(result.destination.index, 0, movedItem);

    if (result.source.droppableId === "serviceProviders") {
      setServiceProviders(sourceList);
    } else {
      setPinnedProviders(sourceList);
    }

    if (result.destination.droppableId === "serviceProviders") {
      setServiceProviders(destinationList);
    } else {
      setPinnedProviders(destinationList);
    }
  };

  // Filter service providers based on search
  const filteredServiceProviders = serviceProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchService.toLowerCase())
  );

  const filteredPinnedProviders = pinnedProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchPinned.toLowerCase())
  );

  // Show only the first 4 providers initially
  const displayedServiceProviders = showAllServiceProviders
    ? filteredServiceProviders
    : filteredServiceProviders.slice(0, 4);

  const displayedPinnedProviders = showAllPinnedProviders
    ? filteredPinnedProviders
    : filteredPinnedProviders.slice(0, 4);

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
            <Droppable droppableId="serviceProviders" isDropDisabled={false}>
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
  
      {/* Pinned Providers Column */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Pinned Providers</h2>
        <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} /> {/* Horizontal Line */}
  
        <Input
          className="w-full mb-4 border px-4 py-2 rounded-lg focus:ring focus:ring-[#9ed568]"
          placeholder="Search pinned providers..."
          value={searchPinned}
          onChange={(e) => setSearchPinned(e.target.value)}
        />
        <Scrollbar style={{ height: "60vh" }}>
          {loading ? (
            // Skeleton Loading for Pinned Providers
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
            <Droppable droppableId="pinnedProviders" isDropDisabled={false}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4">
                  {displayedPinnedProviders.map((provider, idx) => (
                    <ServiceProviderCard key={provider.id} provider={provider} index={idx} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
        </Scrollbar>
        {filteredPinnedProviders.length > 4 && (
          <Button
            className="w-full mt-4"
            variant="contained"
            style={{ backgroundColor: "#9ed568", color: "#fff" }}
            onClick={() => setShowAllPinnedProviders(!showAllPinnedProviders)}
          >
            {showAllPinnedProviders ? "Show Less" : "Show More"}
          </Button>
        )}
      </div>
    </div>
  </DragDropContext>
  );
};

export default Pincomponent;