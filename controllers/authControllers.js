const signupUserController = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
