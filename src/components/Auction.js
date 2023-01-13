import React, { useEffect, useState } from "react";

//style
import "./Auction.css";

function Auction() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //before data is fetched
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://tonapi.io/v1/auction/getCurrent?tld=t.me`
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        //After data is fetched
        setIsLoading(false);
        setData(jsonData);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="auction">
        <div className="auction-header">
          <h2>
            <span>Top</span> Auctions
          </h2>

          <div className="auction-select">
            <select name="" id="" className="auction-select-one">
              <option value="on auction">On auction</option>
              <option value="sold">Sold</option>
              <option value="for sale">For sale</option>
            </select>

            <select name="" id="" className="auction-select-two">
              <option value="on auction">Price high to low</option>
              <option value="sold">Price low to high</option>
              <option value="for sale">Recently listed</option>
              <option value="for sale">Ending soon</option>
            </select>
          </div>
        </div>
      </div>

      <div className="auction-table">
        {isLoading && <div className="auction-loading">Loading...</div>}

        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Minimum bid</th>
              <th>Auction ends in</th>
            </tr>
          </thead>

          <tbody>
            {data.data &&
              data.data.map((item) => (
                <tr className="auction-tbody-row" key={item.domain}>
                  <td>{item.domain}</td>
                  <td>{item.price}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Auction;
