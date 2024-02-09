
"use client"
// import "./styles.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

const CenteredContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "20px",
});
const Card = styled(Box)({
  //   backgroundColor: "rgb(255 245 222)",
  height: "200px",
  width: "150px",
  borderRadius: "15px",
  padding: "20px",
  boxShadow: "0 0 20px lightgray", // "0 0 10px gray      ", // Equal shadow from all sides
});
const Name = styled(Typography)({
  fontSize: "20px",
  fontweight: "900",
});
const SubHeading = styled(Typography)({
  fontSize: "12px",
  marginTop: "10px",
});
export default function App() {
  return (
    <CenteredContainer>
      <Typography fontWeight="bold" fontSize={24} marginBottom={2}>
        Channel Manager
      </Typography>
      <Typography textAlign={"center"} fontSize={16} marginBottom={1}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
        nemo deleniti? Quis, similique mollitia eum aliquam reprehenderit
        temporibus eveniet
      </Typography>
      <Link component="button" variant="body2" fontWeight={700}>
        {"Read more ->"}
      </Link>
      <Stack direction="row" marginTop={5}>
        <Stack>
          <Card sx={{ width: "300px", p: 2, m: 3 }}>           
            <Avatar
              alt="John Doe"
                src="https://res.cloudinary.com/dyktaxdyv/image/upload/c_limit,w_288/f_auto/q_auto/nodes_xqoetm?_a=BAVHt0Gd0"
                sx={{borderRadius:2 , }}
            />
            
            <Typography fontWeight="bold" marginTop={2}>
              Multi Channel Integration
            </Typography>
            <SubHeading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate itaque iusto quos repudiandae, adipisci ea culpa
            </SubHeading>
          </Card>
          <Card sx={{ width: "300px", p: 2, m: 3 }}>
            <Avatar alt="John Doe" src="https://res.cloudinary.com/dyktaxdyv/image/upload/c_limit,w_288/f_auto/q_auto/nodes_xqoetm?_a=BAVHt0Gd0" 
              sx={{borderRadius:1}}
            />
            <Typography fontWeight="bold" marginTop={2}>
              Manage Channels Bookings
            </Typography>
            <SubHeading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate itaque iusto quos repudiandae, adipisci ea culpa
            </SubHeading>
          </Card>
        </Stack>
        <Stack marginTop={3}>
          <Card sx={{ width: "300px", p: 2, m: 3 }}>
          <Avatar alt="John Doe" src="https://res.cloudinary.com/dyktaxdyv/image/upload/c_limit,w_288/f_auto/q_auto/nodes_xqoetm?_a=BAVHt0Gd0" 
              sx={{borderRadius:1}}
            />
            <Typography fontWeight="bold" marginTop={2}>
              Manage Prices & Inventory
            </Typography>
            <SubHeading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate itaque iusto quos repudiandae, adipisci ea culpa
            </SubHeading>
          </Card>
          <Card sx={{ width: "300px", p: 2, m: 3 }}>
          <Avatar alt="John Doe" src="https://res.cloudinary.com/dyktaxdyv/image/upload/c_limit,w_288/f_auto/q_auto/nodes_xqoetm?_a=BAVHt0Gd0" 
              sx={{borderRadius:1}}
            />
            <Typography fontWeight="bold" marginTop={2}>
              Manage Multiple Hotels
            </Typography>
            <SubHeading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate itaque iusto quos repudiandae, adipisci ea culpa
            </SubHeading>
          </Card>
        </Stack>
      </Stack>
    </CenteredContainer>
  );
}
