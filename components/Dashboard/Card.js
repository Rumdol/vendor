import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function CardforDashboard() {
  const data = [
    {
      title: "Sales",
      value: "$1,234.00",
      icon: "/static/img/shopping-cart.png",
      color: "#FFF7E8",
    },
    {
      title: "Total Product",
      value: "50",
      icon: "/static/img/box.png",
      color: "#E5F9E5",
    },
    {
      title: "Total Customer",
      value: "20",
      icon: "/static/img/customer.png",
      color: "#E5F9FF",
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '16px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
      }}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: item.color,
            minWidth: 250,
            maxWidth: 300,
            flex: '1 0 200px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: '#FFF7E8',
              marginRight: '16px',
            }}
          >
            <img
              src={item.icon}
              alt={item.title}
              style={{ width: '30px', height: '30px' }}
            />
          </Box>
          <Box>
            <Typography
              sx={{ color: '#8C8C8C', fontSize: '14px', fontWeight: 'medium' }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{ color: '#1A1A1A', fontSize: '24px', fontWeight: 'bold' }}
            >
              {item.value}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
