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




import { useEffect, useState } from "react";

interface Company {
  id: number;
  name: string;
  address: string;
  zip: string;
  country: string;
  employeeCount: number;
  industry: string;
  marketCap: number;
  domain: string;
  logo: string;
  ceoName: string;
}

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fake-json-api.mock.beeceptor.com/companies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data: Company[]) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="p-5 text-xl">Loading...</h2>;
  if (error) return <h2 className="p-5 text-red-500">{error}</h2>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Company List</h1>

      {companies.map((company, index) => (
        <div
          key={company.id}
          className={`p-5 mb-4 rounded-lg shadow-md 
          ${
            index % 3 === 0
              ? "bg-blue-100"
              : index % 3 === 1
              ? "bg-green-100"
              : "bg-yellow-100"
          }`}
        >
          <p><strong>id:</strong> {company.id}</p>
          <p><strong>name:</strong> {company.name}</p>
          <p><strong>address:</strong> {company.address}</p>
          <p><strong>zip:</strong> {company.zip}</p>
          <p><strong>country:</strong> {company.country}</p>
          <p><strong>employeeCount:</strong> {company.employeeCount}</p>
          <p><strong>industry:</strong> {company.industry}</p>
          <p><strong>marketCap:</strong> {company.marketCap}</p>
          <p><strong>domain:</strong> {company.domain}</p>
          <img src={company.logo} alt="logo" className="w-24 mt-2 mb-2" />
          <p><strong>ceoName:</strong> {company.ceoName}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

