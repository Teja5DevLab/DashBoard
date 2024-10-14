import {
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Header from "../../Components/Header";
import { tokens } from "../../theme";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [displayName, setDisplayName] = useState("Steph");
  const [fullName, setFullName] = useState("Stephen Powder");
  const [position, setPosition] = useState("CEO");
  const [email, setEmail] = useState("stephenpowder@swiftdex.com");
  const [phoneNumber, setPhoneNumber] = useState("+1 3453536078");

  return (
    <Box m="20px">
      <Header title="Settings" subtitle="Change your Preferences" />
      <Box
        sx={{
          backgroundColor: colors.primary[400],
          p: 3,
          borderRadius: "8px",
          boxShadow: 1,
          mb: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          General
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            label="Displayed Name"
            variant="outlined"
            fullWidth
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Position"
            variant="outlined"
            fullWidth
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: colors.primary[400],
          p: 3,
          borderRadius: "8px",
          boxShadow: 1,
          mb: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Login Info
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            label="Username (Email)"
            variant="outlined"
            fullWidth
            value={email}
            sx={{ mb: 3 }}
            disabled
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            value="**********"
            sx={{ mb: 3 }}
            disabled
            type="password"
          />
          <Button variant="contained" color="secondary">
            Change Password
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: colors.primary[400],
          p: 3,
          borderRadius: "8px",
          boxShadow: 1,
          mb: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Preferences
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            label="Color Scheme"
            variant="outlined"
            fullWidth
            value="Default"
            sx={{ mb: 3 }}
          />
          <TextField
            label="Default Homepage"
            variant="outlined"
            fullWidth
            value="Dashboard"
            sx={{ mb: 3 }}
            disabled
          />
          <TextField
            label="Data Format"
            variant="outlined"
            fullWidth
            value="M/D/YYYY"
            sx={{ mb: 3 }}
          />
          <TextField
            label="Language"
            variant="outlined"
            fullWidth
            value="English"
            sx={{ mb: 3 }}
            disabled
          />
          <TextField
            label="Time Zone"
            variant="outlined"
            fullWidth
            value="Eastern Time - US and Canada"
            disabled
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
