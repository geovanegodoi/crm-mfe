import ContentLoader from 'react-content-loader';

/* eslint-disable-next-line */
export interface WeatherReportSkeletonProps {}

export function WeatherReportSkeleton(props: WeatherReportSkeletonProps) {
  const welcome = {
    x: 0,
    y: 8,
    width: 400,
    height: 30,
  };

  const text1 = {
    x: 0,
    y: welcome.y + welcome.height + 30,
    width: 400,
    height: 10,
  };

  const text2 = {
    x: 0,
    y: text1.y + text1.height + 5,
    width: 200,
    height: 10,
  };

  const temperature = {
    x: 0,
    y: text2.y + text2.height + 50,
    width: 400,
    height: 10,
  };

  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect {...welcome} />
      <rect {...text1} />
      <rect {...text2} />
      <rect {...temperature} />
    </ContentLoader>
  );
}

export default WeatherReportSkeleton;
