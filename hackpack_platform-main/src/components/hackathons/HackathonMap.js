import { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { Box, Typography } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Extended hackathon data by location
const hackathonsByLocation = {
  India: {
    Delhi: { count: 5, coordinates: [77.1025, 28.7041] },
    Mumbai: { count: 3, coordinates: [72.8777, 19.0760] },
    Bangalore: { count: 7, coordinates: [77.5946, 12.9716] },
    Hyderabad: { count: 4, coordinates: [78.4867, 17.3850] },
    Chennai: { count: 3, coordinates: [80.2707, 13.0827] },
    Kolkata: { count: 2, coordinates: [88.3639, 22.5726] },
    Pune: { count: 4, coordinates: [73.8567, 18.5204] },
  },
  USA: {
    "San Francisco": { count: 6, coordinates: [-122.4194, 37.7749] },
    "New York": { count: 4, coordinates: [-74.0060, 40.7128] },
    "Boston": { count: 5, coordinates: [-71.0589, 42.3601] },
    "Seattle": { count: 3, coordinates: [-122.3321, 47.6062] },
    "Austin": { count: 4, coordinates: [-97.7431, 30.2672] },
  },
  UK: {
    "London": { count: 5, coordinates: [-0.1276, 51.5074] },
    "Manchester": { count: 2, coordinates: [-2.2426, 53.4808] },
  },
  Germany: {
    "Berlin": { count: 4, coordinates: [13.4050, 52.5200] },
    "Munich": { count: 3, coordinates: [11.5820, 48.1351] },
  },
  Singapore: {
    "Singapore": { count: 5, coordinates: [103.8198, 1.3521] },
  },
  Australia: {
    "Sydney": { count: 3, coordinates: [151.2093, -33.8688] },
    "Melbourne": { count: 2, coordinates: [144.9631, -37.8136] },
  },
  Japan: {
    "Tokyo": { count: 4, coordinates: [139.6917, 35.6895] },
    "Osaka": { count: 2, coordinates: [135.5023, 34.6937] },
  },
  Canada: {
    "Toronto": { count: 3, coordinates: [-79.3832, 43.6532] },
    "Vancouver": { count: 2, coordinates: [-123.1207, 49.2827] },
  },
  Brazil: {
    "Sao Paulo": { count: 3, coordinates: [-46.6333, -23.5505] },
    "Rio de Janeiro": { count: 2, coordinates: [-43.1729, -22.9068] },
  },
};

function HackathonMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [error, setError] = useState(null);

  const markerAnimation = useSpring({
    to: {
      scale: selectedLocation ? 1.2 : 1,
    },
  });

  useEffect(() => {
    // Check if the map is loading correctly
    fetch(geoUrl)
      .catch(err => {
        console.error("Error loading map data:", err);
        setError("Failed to load map data");
      });
  }, []);

  if (error) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        {error}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '20px',
        mb: 6,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: '#fff',
          mb: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          textShadow: '0 2px 10px rgba(255, 77, 77, 0.3)',
        }}
      >
        Active Hackathons Worldwide
      </Typography>

      <Box sx={{ flex: 1, position: 'relative' }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 130,
            center: [0, 30]
          }}
          width={800}
          height={400}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255, 255, 255, 0.1)"
                    stroke="rgba(255, 255, 255, 0.2)"
                    style={{
                      default: {
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      },
                      hover: {
                        fill: "rgba(255, 77, 77, 0.2)",
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: "rgba(255, 77, 77, 0.3)",
                        outline: 'none',
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {Object.entries(hackathonsByLocation).map(([country, cities]) =>
              Object.entries(cities).map(([city, data]) => (
                <animated.g
                  key={`${country}-${city}`}
                  style={markerAnimation}
                >
                  <Marker
                    coordinates={data.coordinates}
                    onMouseEnter={(e) => {
                      setTooltipContent(`${city}, ${country}: ${data.count} hackathons`);
                      setTooltipPosition({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseLeave={() => setTooltipContent("")}
                    onClick={() => setSelectedLocation(`${country}-${city}`)}
                  >
                    <circle
                      r={6}
                      fill={selectedLocation === `${country}-${city}` ? "#F9CB28" : "#FF4D4D"}
                      stroke="#fff"
                      strokeWidth={2}
                      style={{
                        cursor: 'pointer',
                        filter: `drop-shadow(0 0 4px ${selectedLocation === `${country}-${city}` ? "#F9CB28" : "#FF4D4D"})`,
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Marker>
                </animated.g>
              ))
            )}
          </ZoomableGroup>
        </ComposableMap>
      </Box>

      {tooltipContent && (
        <Box
          sx={{
            position: 'fixed',
            top: tooltipPosition.y + 10,
            left: tooltipPosition.x + 10,
            background: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '14px',
            pointerEvents: 'none',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {tooltipContent}
        </Box>
      )}
    </Box>
  );
}

export default HackathonMap; 