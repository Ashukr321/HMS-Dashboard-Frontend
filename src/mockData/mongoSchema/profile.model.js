import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    userId: {
      type: String, // Simplified from mongoose.Schema.Types.String
      required: true,
      ref: "User",
      unique: true, // Crucial for 1-to-1 relationship
    },
    firstName: {
      type: String,
      trim: true,
      minLength: [2, "First name must be at least 2 characters long"],
      maxLength: [50, "First name must be at most 50 characters long"],
    },
    lastName: {
      type: String,
      trim: true,
      minLength: [2, "Last name must be at least 2 characters long"],
      maxLength: [50, "Last name must be at most 50 characters long"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      match: [/^\+?[1-9]\d{1,14}$/, "Please enter valid phone number"],
    },
    profilePic: { // Fixed typo from 'prifilePic'
      type: String,
      default: "https://example.com/default-avatar.png",
      trim: true,
    },
    address: {
      city: String,
      state: String,
      country: String,
      zipCode: String,
      streetAddress: String,
    },
    dateOfBirth: {
      type: Date,
    },
    // Age is better as a number if you want to query it, 
    // but ensure your frontend updates it!
    age: {
      type: String,
      min: [0, "Age cannot be negative"],
      max: [120, "Age seems invalid"],
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      // any data specific to role can go here
    },
  },

  {
    timestamps: true,
    minimize: false,
    // now we can read virtuals when we output data
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }

);

// Optional: Add a virtual to get full name easily
profileSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;