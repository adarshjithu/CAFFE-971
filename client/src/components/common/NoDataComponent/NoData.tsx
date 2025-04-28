
import { Box } from 'lucide-react';

const NoData: React.FC<{ message?: string }> = ({ message = "No data available" }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground h-full w-full">
      <Box className="w-12 h-12 mb-4 text-muted-foreground" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default NoData;
