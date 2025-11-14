import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import sty from './plasmic/website_starter/PlasmicStatusesConnections2.module.css';

interface ConnectionStatus {
  website: number;
  status: string;
}

interface ChannelInfo {
  id: number;
  name: string;
  icon: string;
  step: number;
}

const CHANNELS: ChannelInfo[] = [
  { id: 2, name: 'جاباما', icon: 'https://media.rentamon.com/icon%2Fjabama-wide.jpg', step: 1 },
  { id: 3, name: 'جاجیگا', icon: 'https://media.rentamon.com/icon%2Fjajiga-wide.jpg', step: 3 },
  { id: 4, name: 'شب', icon: 'https://media.rentamon.com/icon%2Fshab-wide.jpg', step: 5 },
  { id: 6, name: 'اتاقک', icon: 'https://media.rentamon.com/icon%2Fotaghak-wide.jpg', step: 7 },
  { id: 7, name: 'مهمانشو', icon: 'https://media.rentamon.com/icon%2Fmihmansho-wide.jpg', step: 10 },
  { id: 8, name: 'هومسا', icon: 'https://media.rentamon.com/icon%2Fhomsa-wide.jpg', step: 9 },
];

export const StatusesConnectionsRedesigned: React.FC = () => {
  const [connectionStatuses, setConnectionStatuses] = useState<ConnectionStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const connectedRef = useRef<HTMLDivElement>(null);
  const disconnectedRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchConnectionStatuses();
  }, []);

  const fetchConnectionStatuses = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://gateway.rentamon.com/webhook/connection-statuses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch connection statuses');
      }

      const data = await response.json();
      setConnectionStatuses(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching connection statuses:', err);
      setError('خطا در بازیابی اطلاعات اتصال');
    } finally {
      setLoading(false);
    }
  };

  const getChannelStatus = (channelId: number): boolean => {
    const status = connectionStatuses.find(s => s.website === channelId);
    return status?.status === 'true';
  };

  const handleDisconnectedChannelClick = (channel: ChannelInfo) => {
    router.push(`/connections?step=${channel.step}`);
  };

  const connectedChannels = CHANNELS.filter(channel => getChannelStatus(channel.id));
  const disconnectedChannels = CHANNELS.filter(channel => !getChannelStatus(channel.id));
  const hasDisconnections = disconnectedChannels.length > 0;

  // Get the first disconnected channel for the alert message
  const firstDisconnected = disconnectedChannels[0];

  if (loading) {
    return (
      <div className={sty.connectionContainer} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="https://web.rentamon.com/wp-content/uploads/2024/03/loading-1.gif"
          alt="Loading..."
          style={{ width: '50px', height: '50px' }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className={sty.connectionContainer} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ color: '#f44336', fontSize: '18px', fontWeight: 600 }}>{error}</div>
      </div>
    );
  }

  return (
    <div className={sty.connectionContainer}>
      {/* Close Button */}
      <button className={sty.closeButton} onClick={() => router.back()} title="بستن">
        <svg className={sty.closeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Info Button */}
      <button className={sty.infoButton} onClick={() => alert('راهنما: کانال‌های متصل در سمت چپ و کانال‌های قطع شده در سمت راست نمایش داده می‌شوند. برای اتصال مجدد، روی کانال قطع شده کلیک کنید.')} title="راهنما">
        <svg className={sty.infoIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      </button>

      {/* Alert Banner for Disconnections */}
      {hasDisconnections && firstDisconnected && (
        <div className={sty.alertBanner}>
          <svg className={sty.alertIcon} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>هشدار: اتصال «{firstDisconnected.name}» به میان قطع شده! روی {firstDisconnected.name} برن</span>
        </div>
      )}

      {/* Connected Channels - Left Side */}
      <div className={sty.connectedSide} ref={connectedRef}>
        {connectedChannels.length > 0 && (
          <div className={sty.sectionTitle}>متصل شده</div>
        )}
        {connectedChannels.map((channel) => (
          <div
            key={channel.id}
            className={`${sty.channelCard} ${sty.channelCardConnected}`}
          >
            <div className={`${sty.statusBadge} ${sty.statusBadgeConnected}`}>
              <svg className={sty.statusIcon} viewBox="0 0 24 24" fill="white">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <img src={channel.icon} alt={channel.name} className={sty.channelIcon} />
            <div className={sty.channelName}>{channel.name}</div>
          </div>
        ))}
      </div>

      {/* Central Hub - Rentamon Logo */}
      <div className={sty.centralHub} ref={hubRef}>
        <img
          src="https://media.rentamon.com/icon/rentamon-logo.png"
          alt="Rentamon"
          className={sty.hubLogo}
          onError={(e) => {
            // Fallback to a text logo if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
        <div style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#0066cc',
          textAlign: 'center'
        }}>
          رنتامون
        </div>
      </div>

      {/* Disconnected Channels - Right Side */}
      <div className={sty.disconnectedSide} ref={disconnectedRef}>
        {disconnectedChannels.length > 0 && (
          <div className={sty.sectionTitle}>قطع شده</div>
        )}
        {disconnectedChannels.map((channel) => (
          <div
            key={channel.id}
            className={`${sty.channelCard} ${sty.channelCardDisconnected}`}
            onClick={() => handleDisconnectedChannelClick(channel)}
          >
            <div className={`${sty.statusBadge} ${sty.statusBadgeDisconnected}`}>
              <svg className={sty.statusIcon} viewBox="0 0 24 24" fill="white">
                <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <img src={channel.icon} alt={channel.name} className={sty.channelIcon} />
            <div className={sty.channelName}>{channel.name}</div>
          </div>
        ))}
      </div>

      {/* Connection Lines SVG */}
      <svg className={sty.connectionLines}>
        {connectedChannels.map((channel, index) => (
          <line
            key={`connected-${channel.id}`}
            className={`${sty.connectionLine} ${sty.connectionLineConnected}`}
            x1="35%"
            y1="50%"
            x2="50%"
            y2="50%"
            style={{
              transform: `translateY(${(index - connectedChannels.length / 2) * 150}px)`
            }}
          />
        ))}
        {disconnectedChannels.map((channel, index) => (
          <line
            key={`disconnected-${channel.id}`}
            className={`${sty.connectionLine} ${sty.connectionLineDisconnected}`}
            x1="50%"
            y1="50%"
            x2="65%"
            y2="50%"
            style={{
              transform: `translateY(${(index - disconnectedChannels.length / 2) * 150}px)`
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default StatusesConnectionsRedesigned;
