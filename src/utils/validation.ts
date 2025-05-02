export const validateTaskTitle = (title: string): boolean => {
    const trimmed = title.trim();
    return trimmed.length > 0 && trimmed.length <= 100;
};
