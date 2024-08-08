export const isAdmin = (): boolean => {
    if (!process.env.ADMIN_KEY || !process.env.ADMIN_SECRET) return false;
    if (typeof window !== "undefined") {
        const admin = localStorage.getItem(process.env.ADMIN_KEY);
        if (!admin || admin !== process.env.ADMIN_SECRET) return false;
        return true;
    } else {
        return false;
    };
};