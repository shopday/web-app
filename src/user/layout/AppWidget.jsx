import { Grid, Button, Box, Card, Stack, Text, Sidebar } from "grommet";
const src = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";
import {
  Analytics,
  Organization,
  Clock,
  Configure,
  Help,
  Projects,
  Split,
  StatusInfoSmall,
} from "grommet-icons";
import { useNavigate } from "react-router-dom";

const SidebarButton = ({ icon, label, ...rest }) => (
  <Card pad="small" background="white">
    <Button
      gap="medium"
      alignSelf="start"
      plain
      icon={icon}
      label={label}
      {...rest}
    />
  </Card>
);

const MainNavigation = () => {
  const navigate = useNavigate();
  return (
    <Grid gap="large" columns="small">
      <SidebarButton
        icon={<Organization color="brand" size="medium" />}
        label="Companies"
        onClick={() => navigate("/user/app/companies")}
      />
      <SidebarButton icon={<Projects />} label="Services" />
      <SidebarButton icon={<Clock />} label="Glances" />
      <SidebarButton icon={<Split />} label="Flows" />
      <SidebarButton icon={<Analytics />} label="Analytics" />
      <SidebarButton icon={<Configure />} label="Configure" />
    </Grid>
  );
};

export const AppWidget = () => {
  return (
    <Box height={{ min: "100%" }}>
      <MainNavigation />
    </Box>
  );
};
