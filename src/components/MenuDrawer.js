import * as React from "react";
import {
	List,
	Divider,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useTheme,
	ListItem,
} from "@mui/material";

import {
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	MoveToInbox as InboxIcon,
	Mail as MailIcon,
} from "@mui/icons-material";

import {
	Drawer as CustomDrawer,
	DrawerHeader as CustomDrawerHeader,
} from "../utils/menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../hooks/menuActions";

const MenuDrawer = () => {
	const theme = useTheme();
	const open = useSelector((state) => state.isOpen);
	const dispatch = useDispatch();

	return (
		<CustomDrawer variant="permanent" open={open}>
			<CustomDrawerHeader>
				<IconButton
					onClick={() => {
						dispatch(toggleMenu());
					}}
				>
					{theme.direction === "rtl" ? (
						<ChevronRightIcon />
					) : (
						<ChevronLeftIcon />
					)}
				</IconButton>
			</CustomDrawerHeader>
			<Divider />
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem key={text} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem key={text} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</CustomDrawer>
	);
};

export default MenuDrawer;
