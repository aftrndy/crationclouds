import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  iconClass: string;
  iconBgClass: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  trendColor?: string;
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  iconClass,
  iconBgClass,
  trend,
  trendValue,
  trendColor = '',
  subtitle = 'Last week',
}) => {
  return (
    <div className="card sales-card">
      <div className="row">
        <div className="col-8">
          <div className="ps-4 pt-4 pe-3 pb-4">
            <span className="mb-2 fs-12 fw-semibold d-block">{title}</span>
            <div className="pb-0 mt-0">
              <div className="d-flex">
                <h4 className="fs-20 fw-semibold mb-2">{value}</h4>
              </div>
              <p className="mb-0 fs-12 text-muted">
                {subtitle}
                {trend && (
                  <i className={`bx bx-caret-${trend} mx-2 text-${trendColor}`}></i>
                )}
                <span className={`fw-semibold text-${trendColor}`}> {trendValue}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className={`circle-icon ${iconBgClass} text-center align-self-center overflow-hidden`}>
            <i className={iconClass}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
