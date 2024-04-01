import * as React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as CustomAppBar } from "../utils/menu";
import { Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../hooks/menuActions";

const MenuAppBar = () => {
	const open = useSelector((state) => state.isOpen);
	const dispatch = useDispatch();

	return (
		<CustomAppBar position="fixed" open={open}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={() => {
						dispatch(toggleMenu());
					}}
					edge="start"
					sx={{
						marginRight: 5,
						...(open && { display: "none" }),
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
					Mini variant drawer
				</Typography>
			</Toolbar>
		</CustomAppBar>
	);
};

export default MenuAppBar;
