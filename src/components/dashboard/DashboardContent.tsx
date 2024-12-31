import { Card } from "@/components/ui/card";
import { Users, Network, TicketCheck, ArrowUp, ArrowDown } from "lucide-react";

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome to your ISP management dashboard</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Clients"
          value="1,234"
          trend={+12.5}
          icon={Users}
        />
        <MetricCard
          title="Network Uptime"
          value="99.9%"
          trend={+0.2}
          icon={Network}
        />
        <MetricCard
          title="Active Tickets"
          value="23"
          trend={-5}
          icon={TicketCheck}
        />
        <MetricCard
          title="Bandwidth Usage"
          value="85%"
          trend={+3.2}
          icon={Network}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Support Tickets</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium">Connection Issue</p>
                  <p className="text-sm text-muted-foreground">Client #{1000 + i}</p>
                </div>
                <span className="text-sm text-muted-foreground">2h ago</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Network Status</h3>
          <div className="space-y-4">
            {[
              { name: "Main Server", status: "Operational" },
              { name: "Backup Server", status: "Operational" },
              { name: "DNS Services", status: "Operational" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span className="font-medium">{item.name}</span>
                <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, icon: Icon }) {
  const isPositive = trend > 0;
  
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-5 w-5 text-muted-foreground" />
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          <span className="text-sm ml-1">{Math.abs(trend)}%</span>
        </div>
      </div>
      <h3 className="text-2xl font-semibold">{value}</h3>
      <p className="text-muted-foreground mt-1">{title}</p>
    </Card>
  );
}