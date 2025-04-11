'use client'

import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const allFields = [
  'lp_hero_title',
  'lp_hero_subtitle', 
  'hero_description_2', 
  'hero_description_what_we_offer',
];

export default function AdsContent() {
  const [data, setData] = useState({});
  const [editing, setEditing] = useState(null);
  const [newAd, setNewAd] = useState(
    allFields.reduce((acc, f) => ({ ...acc, [f]: '' }), {
      loc: '', svc: '', cond: ''
    })
  );

  const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + 'adsClinic'
  });

  useEffect(() => {
    API.get('/')
      .then(res => {
        const map = {};
        res.data.forEach(c => {
          map[c.locationCode] = c.services;
        });
        setData(map);
      })
      .catch(console.error);
  }, []);

  const handleDelete = (loc, svc, cond) => {
    API.delete(`/${loc}/${svc}/${cond}`)
      .then(() => {
        setData(d => {
          const c = { ...d };
          delete c[loc]?.[svc]?.[cond];
          return c;
        });
      })
      .catch(console.error);
  };

  const startEdit = (loc, svc, cond) => {
    setEditing({
      loc, svc, cond,
      ...data[loc][svc][cond]
    });
  };

  const saveEdit = () => {
    const { loc, svc, cond, ...fields } = editing;
    API.post(`/${loc}/${svc}/${cond}`, fields)
      .then(() => {
        setData(d => ({
          ...d,
          [loc]: {
            ...d[loc],
            [svc]: {
              ...d[loc][svc],
              [cond]: fields
            }
          }
        }));
        setEditing(null);
      })
      .catch(console.error);
  };

  const handleAdd = () => {
    const { loc, svc, cond, ...fields } = newAd;
    if (!loc||!svc||!cond) return alert('Provide loc, svc, cond');
    API.post(`/${loc}/${svc}/${cond}`, fields)
      .then(() => {
        setData(d => ({
          ...d,
          [loc]: {
            ...d[loc],
            [svc]: {
              ...((d[loc]||{})[svc]||{}),
              [cond]: fields
            }
          }
        }));
        setNewAd(allFields.reduce((acc,f)=>({ ...acc, [f]:'' }), { loc:'',svc:'',cond:'' }));
      })
      .catch(console.error);
  };

  return (
    <Container maxWidth="xl" className="p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold">Ads Content</h1>

      {/* Add Form */}
      <section className="p-4 border rounded-lg bg-gray-50 space-y-2">
        <h2 className="text-2xl font-semibold">Add New Ad</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['loc','svc','cond', ...allFields].map(f => (
            <input
              key={f}
              placeholder={f}
              value={newAd[f]}
              onChange={e => setNewAd(n => ({ ...n, [f]: e.target.value }))}
              className="border rounded px-2 py-1 w-full"
            />
          ))}
        </div>
        <button
          onClick={handleAdd}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </section>

      {/* Edit Form */}
      {editing && (
        <section className="p-4 border-2 border-orange-400 rounded-lg bg-orange-50 space-y-2">
          <h2 className="text-2xl font-semibold">
            Edit Ad: {editing.loc}/{editing.svc}/{editing.cond}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allFields.map(f => (
              <div key={f} className="flex flex-col">
                <label className="font-medium">{f}</label>
                <input
                  value={editing[f]||''}
                  onChange={e => setEditing(ed => ({ ...ed, [f]: e.target.value }))}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
            ))}
          </div>
          <div className="space-x-2">
            <button
              onClick={saveEdit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(null)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </section>
      )}

      {/* Display with Accordions */}
      <div className="space-y-4">
        {Object.entries(data).map(([loc, svcs]) => (
          <details key={loc} className="border rounded">
            <summary className="bg-gray-200 px-4 py-2 cursor-pointer text-xl font-bold">
              Location: {loc.toUpperCase()}
            </summary>
            <div className="p-4 space-y-4">
              {svcs && typeof svcs === 'object' ? (
                Object.entries(svcs).map(([svc, conds]) => (
                  <details key={svc} className="border rounded">
                    <summary className="bg-gray-100 px-3 py-1 cursor-pointer text-lg font-semibold">
                      Service: {svc}
                    </summary>
                    <div className="p-3 space-y-2">
                      {conds && typeof conds === 'object' ? (
                        Object.entries(conds).map(([cond, ad]) => (
                          <div
                            key={cond}
                            className="p-3 border rounded bg-white flex flex-col md:flex-row md:items-center md:justify-between"
                          >
                            <div>
                              <strong className="block">{cond}</strong>
                              <div className="mt-1 space-y-1 text-sm">
                                {allFields.map(f => (
                                  <div key={f}>
                                    <span className="font-medium">{f}:</span>{' '}
                                    <span>{ad[f]}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 space-x-2">
                              <button
                                onClick={() => startEdit(loc, svc, cond)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(loc, svc, cond)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">No conditions defined.</p>
                      )}
                    </div>
                  </details>
                ))
              ) : (
                <p className="text-sm text-gray-500">No services defined.</p>
              )}
            </div>
          </details>
        ))}
      </div>
    </Container>
  );
}
