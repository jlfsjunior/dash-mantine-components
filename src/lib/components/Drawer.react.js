import React, { useState, useEffect } from "react";
import { Drawer as MantineDrawer } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { NumberSizes, Positions, Sizes } from "../propTypes";

/** Display overlay area at any side of the screen. For more information, see: https://mantine.dev/core/drawer/ */
const Drawer = (props) => {
    const { opened, children, setProps } = props;
    const [open, setOpen] = useState(opened);

    useEffect(() => {
        setOpen(opened);
    }, [opened]);

    const onClose = () => {
        setOpen(false);
        setProps({ opened: false });
    };

    return (
        <MantineDrawer
            {...omit(["opened", "setProps", "children"], props)}
            opened={open}
            onClose={onClose}
        >
            {children}
        </MantineDrawer>
    );
};

Drawer.displayName = "Drawer";

Drawer.defaultProps = {
    opened: false,
    noFocusTrap: true,
    noCloseOnEscape: true,
};

Drawer.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Drawer children components */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Hides close button, modal still can be closed with escape key and by clicking outside */
    hideCloseButton: PropTypes.bool,

    /** Disable onClock trigger for outside events */
    noCloseOnClickOutside: PropTypes.bool,

    /** Disable onClock trigger for escape key press */
    noCloseOnEscape: PropTypes.bool,

    /** Disables focus trap */
    noFocusTrap: PropTypes.bool,

    /** Removes overlay entirely */
    noOverlay: PropTypes.bool,

    /**	Disables scroll lock */
    noScrollLock: PropTypes.bool,

    /**	If true drawer is mounted to the dom */
    opened: PropTypes.bool,

    /** Drawer body padding from theme or number for padding in px */
    padding: NumberSizes,

    /** Drawer body position */
    position: Positions,

    /**	Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width */
    size: PropTypes.oneOfType([Sizes, PropTypes.string, PropTypes.number]),

    /** Drawer title, displayed in header before close button */
    title: PropTypes.string,

    /**	Popper zIndex */
    zIndex: PropTypes.number,
};

export default Drawer;