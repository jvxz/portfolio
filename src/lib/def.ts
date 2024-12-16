export const fadeStaggerParent = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const fadeStaggerChild = {
    hidden: {
        opacity: 0,
        y: 27.5,
        transition: { duration: 0.45, type: "spring" },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, type: "spring" },
    },
};