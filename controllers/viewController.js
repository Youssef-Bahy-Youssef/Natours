const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

module.exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).render('overview', {
    tours
  });
});

module.exports.getTour = catchAsync(async (req, res, next) => {
  /*
  now the tour returned should have reviews data, users data
  1) reviews ==> in tourModel we have 'reviews' virtual Populate, so we can use it easily to populate reviews
  2) users ====> in tourModel it's populated automatically
*/

  const tour = await Tour.findOne({ slug: req.params.slug }).populate(
    'reviews'
  );

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404));
  }
  console.log('reviews in getTour', tour.reviews);

  res.status(200).render('tour', {
    tour
  });
});

module.exports.getLoginForm = (req, res) => {
  res.status(200).render('login');
};

module.exports.getAccountSettings = catchAsync(async (req, res, next) => {
  // we will implement protect middleware before this middleware, so we can store the user in res.locals in protect middleware, and this is better than make another function call to User model

  // const user = await User.findById(req.user.id);
  res.status(200).render('account', {
    title: 'Your account'
  });
});

module.exports.updateData = catchAsync(async (req, res, next) => {
  // console.log('Updating...', req.body);
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    {
      new: true,
      runsValidator: true
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
});
