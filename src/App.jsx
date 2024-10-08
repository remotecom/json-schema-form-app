import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { EmploymentCreationPage } from "@/pages/create-employment/index.jsx";
import { CompanyCreationPage } from "@/pages/create-company/index.jsx";
import { CostCalculatorPage } from "@/pages/cost-calculator/index.jsx";
import { HomePage } from "@/pages/index.jsx";
import { Layout } from "@/layouts/index.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/create-company" element={<CompanyCreationPage />} />
              <Route
                path="/create-employment"
                element={<EmploymentCreationPage />}
              />
              <Route path="/cost-calculator" element={<CostCalculatorPage />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
