import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Chip, List, ListItem, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface DonationCardProps {
  avatar: string;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  frequency: string;
  date: string;
  amount: string;
  target: string;
}

const DonationCard: React.FC<DonationCardProps> = ({
  avatar,
  title,
  subtitle,
  description,
  type,
  date,
  target,
  amount,
  frequency,
}) => {
  return (
    <Card
      elevation={10}
      sx={{
        maxWidth: 380,
        bgcolor: "white",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#FFF" }}>
            <img src={avatar} style={{ width: "100%" }} />
          </Avatar>
        }
        title={title}
        titleTypographyProps={{ color: "#333333" }}
        subheader={
          <Stack direction="row" alignItems="center">
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        <Stack spacing={1} alignItems="center">
          <Chip
            label="Locked"
            avatar={
              <LockOutlinedIcon fontSize="small" style={{ fill: "white" }} />
            }
            sx={{ color: "text.primary", bgcolor: "primary.light" }}
          />
          <Typography variant="h2" color="primary.light">
            {amount}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {description}
          </Typography>
          <List dense sx={{ width: 1 }}>
            <ListItem divider disablePadding sx={{ py: 1 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: 1 }}
              >
                <Typography variant="body2" color="text.secondary">
                  Type
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {type}
                </Typography>
              </Stack>
            </ListItem>
            <ListItem divider disablePadding sx={{ py: 1 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: 1 }}
              >
                <Typography variant="body2" color="text.secondary">
                  Date
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {date}
                </Typography>
              </Stack>
            </ListItem>
            <ListItem divider disablePadding sx={{ py: 1 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: 1 }}
              >
                <Typography variant="body2" color="text.secondary">
                  Target
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {target}
                </Typography>
              </Stack>
            </ListItem>
            <ListItem divider disablePadding sx={{ py: 1 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: 1 }}
              >
                <Typography variant="body2" color="text.secondary">
                  Frequency
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {frequency}
                </Typography>
              </Stack>
            </ListItem>
          </List>
        </Stack>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default DonationCard;
