# Library-Management-System

# -------------------
# 1. Clone Repository
# -------------------
git clone https://github.com/itsmedevil162-code/Library-Management-System.git
cd Library-Management-System

# -------------------
# 2. Backend Setup
# -------------------
cd backend
npm init -y                           # Initialize Node project if not already
npm install express mongoose dotenv cors bcrypt jsonwebtoken ts-node-dev typescript @types/express @types/node @types/cors @types/bcrypt @types/jsonwebtoken --save

# Create a .env file with:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/library
# JWT_SECRET=your_jwt_secret

npm run dev                            # Start backend server

# -------------------
# 3. Seed Database (Optional)
# -------------------
# Run this to add sample books and admin user
ts-node-dev seed.ts

# -------------------
# 4. Frontend Setup
# -------------------
cd ../library-frontend
npm create vite@latest . -- --template react-ts  # (if fresh setup)
npm install
npm install axios react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p                        # Initialize Tailwind CSS
npm run dev                                    # Start frontend server

# -------------------
# 5. Git Commands (Save your changes)
# -------------------
git status
git add .
git commit -m "Your commit message"
git push origin main

