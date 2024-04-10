const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    console.error("Async error:", error); // Log the error message
    res.status(500).json({ message: "Internal Server Error" });
  });
};

export default asyncHandler;
