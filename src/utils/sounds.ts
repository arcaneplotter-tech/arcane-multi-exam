class SoundManager {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, type: OscillatorType, duration: number, vol: number = 0.1, startTimeOffset: number = 0) {
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTimeOffset);

    gain.gain.setValueAtTime(vol, this.ctx.currentTime + startTimeOffset);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + startTimeOffset + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime + startTimeOffset);
    osc.stop(this.ctx.currentTime + startTimeOffset + duration);
  }

  playCorrect() {
    this.playTone(523.25, 'sine', 0.1, 0.1, 0); // C5
    this.playTone(659.25, 'sine', 0.1, 0.1, 0.1); // E5
    this.playTone(783.99, 'sine', 0.3, 0.1, 0.2); // G5
  }

  playIncorrect() {
    this.playTone(349.23, 'sawtooth', 0.2, 0.05, 0); // F4
    this.playTone(311.13, 'sawtooth', 0.4, 0.05, 0.2); // D#4
  }

  playGameStart() {
    this.playTone(440, 'square', 0.1, 0.05, 0); // A4
    this.playTone(554.37, 'square', 0.1, 0.05, 0.1); // C#5
    this.playTone(659.25, 'square', 0.1, 0.05, 0.2); // E5
    this.playTone(880, 'square', 0.4, 0.05, 0.3); // A5
  }

  playPlayerJoin() {
    this.playTone(1046.50, 'sine', 0.1, 0.05, 0); // C6
  }
}

export const sounds = new SoundManager();
