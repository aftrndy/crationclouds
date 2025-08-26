import React from 'react';

interface StorageUsageCircleProps {
  percent: number;
}

const StorageUsageCircle: React.FC<StorageUsageCircleProps> = ({ percent }) => {
  // Placeholder for chart, can be replaced with a real chart library
  return (
    <div className="chart-circle" data-color>
      <div className="radialbar-basic1">
        {/* Integrate chart library here if needed */}
      </div>
      <div className="chart-circle-value circle-style">
        <div className="fs-18 fw-semibold">{percent}%</div>
      </div>
    </div>
  );
};

export default StorageUsageCircle;
