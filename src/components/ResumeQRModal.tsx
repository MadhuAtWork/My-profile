import React, { useState, useEffect } from 'react';
import { X, Download, Printer, Copy, Check, Sparkles, Smartphone, CreditCard } from 'lucide-react';
import QRCode from 'qrcode';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeQRModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCardResume?: () => void;
}

export const ResumeQRModal: React.FC<ResumeQRModalProps> = ({ isOpen, onClose, onOpenCardResume }) => {
  const [customUrl, setCustomUrl] = useState<string>(PORTFOLIO_DATA.profile.resumeUrl);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Link directly to Choppari Madhu's Creative Card Resume (#resume)
  const effectiveBase = customUrl.startsWith('http') ? customUrl : `https://${customUrl}`;
  const effectiveUrl = effectiveBase.includes('#') ? effectiveBase : `${effectiveBase}/#resume`;

  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(effectiveUrl, {
        width: 280,
        margin: 2,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error(err));
    }
  }, [isOpen, effectiveUrl]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(effectiveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadBrandedQR = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx || !qrDataUrl) return;

    canvas.width = 400;
    canvas.height = 490;

    // White card background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 400, 490);

    // Top Header Banner
    const gradient = ctx.createLinearGradient(0, 0, 400, 0);
    gradient.addColorStop(0, '#06b6d4');
    gradient.addColorStop(0.5, '#a855f7');
    gradient.addColorStop(1, '#ec4899');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 8);

    // Title Text - Choppari Madhu
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${PORTFOLIO_DATA.profile.name}'s Resume`, 200, 45);

    ctx.fillStyle = '#64748b';
    ctx.font = '14px sans-serif';
    ctx.fillText('Scan with camera to open interactive mobile resume', 200, 68);

    // Draw QR Code
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 60, 90, 280, 280);

      // Footer URL Pill
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(30, 390, 340, 45);
      ctx.strokeStyle = '#cbd5e1';
      ctx.strokeRect(30, 390, 340, 45);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 13px monospace';
      ctx.fillText(effectiveUrl, 200, 418);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.fillText('Choppari Madhu • React & Frontend Developer', 200, 462);

      // Download trigger
      const link = document.createElement('a');
      link.download = `choppari-madhu-resume-qr.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = qrDataUrl;
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Sparkles size={16} />
              <span>Resume & QR Generator</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginTop: '0.25rem' }}>
              {PORTFOLIO_DATA.profile.name}'s QR Resume
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary btn-icon"
            style={{ width: '36px', height: '36px' }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Informative Alert */}
        <div
          style={{
            padding: '0.85rem 1rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            fontSize: '0.88rem',
            color: 'var(--text-main)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.6rem',
          }}
        >
          <Smartphone size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Scanning Target:</strong> When a recruiter scans this QR code, it opens <strong>Choppari Madhu's Card Resume</strong> at <span className="mono" style={{ color: 'var(--accent-cyan)' }}>{effectiveUrl}</span> with all your projects, skills, and contact buttons!
          </div>
        </div>

        {/* URL Input & Presets */}
        <div className="form-group">
          <label className="form-label" htmlFor="resume-url-input">
            Your Resume Portfolio Domain:
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
            <input
              id="resume-url-input"
              type="text"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="chopparimadhu.dev or madhuch155.github.io"
              className="form-input mono"
              style={{ fontSize: '0.9rem' }}
            />
            <button
              type="button"
              onClick={handleCopyLink}
              className="btn btn-secondary"
              style={{ padding: '0.75rem 1rem' }}
              title="Copy QR Link"
            >
              {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
              <span style={{ fontSize: '0.85rem' }}>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Quick Domain Presets for Choppari Madhu */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Select your domain:</span>
            {['chopparimadhu.dev', 'madhuch155.github.io', 'madhuch.dev', 'chopparimadhu.vercel.app'].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setCustomUrl(preset)}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-sm)',
                  background: customUrl === preset ? 'rgba(6, 182, 212, 0.2)' : 'var(--bg-secondary)',
                  border: customUrl === preset ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                  color: customUrl === preset ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  cursor: 'pointer',
                }}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* QR Preview Card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1.25rem 0',
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          }}
        >
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt={`QR Code for ${effectiveUrl}`}
              style={{ width: '180px', height: '180px', display: 'block', borderRadius: '8px' }}
            />
          ) : (
            <div style={{ width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
              Generating QR...
            </div>
          )}

          <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Choppari Madhu • {customUrl}
          </div>
          <div style={{ color: '#64748b', fontSize: '0.78rem' }}>
            Scan with smartphone camera to open your interactive resume
          </div>
        </div>

        {/* Live Preview Button */}
        {onOpenCardResume && (
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenCardResume();
            }}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem', borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}
          >
            <CreditCard size={16} />
            <span>Open Choppari Madhu's Card Resume Screen Live</span>
          </button>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={handleDownloadBrandedQR}
            className="btn btn-primary"
            style={{ flex: 1, justifyContent: 'center', minWidth: '190px' }}
          >
            <Download size={16} />
            <span>Download QR Badge for PDF Resume</span>
          </button>

          <button
            type="button"
            onClick={handlePrintResume}
            className="btn btn-secondary"
            style={{ flex: 1, justifyContent: 'center', minWidth: '150px' }}
          >
            <Printer size={16} color="var(--accent-cyan)" />
            <span>Print ATS PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
