"use client"
import { Container, TextField, Button } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const TestResults = () => {
  const [testResults, setTestResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchEmail, setSearchEmail] = useState('');

  const getResult = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}tests/getAllResults`)
      .then(res => {
        setTestResults(res.data);
        setFilteredResults(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleFilter = () => {
    const filtered = testResults.filter(result => {
      const resultDate = new Date(result.createdAt); // Assuming `result.date` contains the test date
      const isWithinDateRange =
        (!startDate || resultDate >= new Date(startDate)) &&
        (!endDate || resultDate <= new Date(endDate));
      const matchesEmail = !searchEmail || result.email.includes(searchEmail);
      return isWithinDateRange && matchesEmail;
    });
    setFilteredResults(filtered);
  };

  const exportToCSV = () => {
    const headers = ["Email ID,Test Name,Total Score\n"];
    const rows = filteredResults.map(result =>
      `${result.email},${result.testId.testName},${result.totalScore}`
    );
    const csvContent = headers.concat(rows).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "test_results.csv";
    a.click();
    URL.revokeObjectURL(url); // Clean up the URL
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <div className="mx-auto py-10 px-4">
          <h1 className="text-2xl font-bold mb-6">Test Results</h1>

          {/* Filters Section */}
          <div className="mb-6 flex flex-wrap gap-4">
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
            />
            <TextField
              label="Start Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <TextField
              label="End Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleFilter}>
              Apply Filters
            </Button>
            <Button variant="outlined" color="secondary" onClick={exportToCSV}>
              Export CSV
            </Button>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Email ID</th>
                  <th className="py-2 px-4 border-b text-left">Test Name</th>
                  <th className="py-2 px-4 border-b text-left">Total Score</th>
                  <th className="py-2 px-4 border-b text-left">View Result</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((result) => (
                  <tr key={result._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{result.email}</td>
                    <td className="py-2 px-4 border-b">{result.testId.testName}</td>
                    <td className="py-2 px-4 border-b">{result.totalScore}</td>
                    <td className="py-2 px-4 border-b">
                      <Link
                        href={`/admin/testresults/${result._id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        View Full Result
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TestResults;
