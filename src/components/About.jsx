import { PORTFOLIO } from '../data/content';
import CodeStream from './CodeStream';

const ABOUT_CODE_A = `from fastapi import APIRouter, Depends, HTTPException
from app.core.security import create_access_token, verify_totp
from app.schemas import LoginIn, TokenPair

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login", response_model=TokenPair)
async def login(data: LoginIn, users=Depends(get_users)):
    user = await users.by_email(data.email)
    if not user or not user.verify(data.password):
        raise HTTPException(401, "invalid credentials")
    if user.mfa_enabled and not verify_totp(user, data.otp):
        raise HTTPException(403, "mfa required")
    access = create_access_token(sub=user.id, role=user.role)
    refresh = create_refresh_token(sub=user.id)
    return TokenPair(access=access, refresh=refresh)`;

const ABOUT_CODE_B = `from datetime import timedelta
from temporalio import workflow

@workflow.defn
class ReservationWorkflow:
    def __init__(self) -> None:
        self.paid = False

    @workflow.signal
    def payment_confirmed(self) -> None:
        self.paid = True

    @workflow.run
    async def run(self, group_id: int, email: str) -> None:
        await workflow.wait_condition(
            lambda: self.paid, timeout=timedelta(minutes=15)
        )
        await send_tickets(group_id, email)`;

export default function About({ lang }) {
  const t = (key) => PORTFOLIO.ui[lang][key] || key;
  const { about } = PORTFOLIO;

  return (
    <section className="about" id="about">
      <CodeStream id="code-stream" codeA={ABOUT_CODE_A} codeB={ABOUT_CODE_B} />
      <div className="wrap about-grid">
        <div>
          <span className="section-label">{t('label_about')}</span>
          <h2 className="section-heading reveal">{t('about_heading')}</h2>
          <div className="about-body reveal reveal-d1">
            {about[lang].map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <aside className="reveal reveal-d2">
          <div className="facts">
            {about.facts.map((f, i) => (
              <div key={i} className="fact">
                <span className="k">{f.k[lang]}</span>
                <span className="v">{f.v[lang]}</span>
              </div>
            ))}
            <div className="facts-code">
              <span className="c"># {lang === 'pl' ? 'aktualny status' : 'current status'}</span><br />
              <span className="key">status</span> = <span className="str">"available"</span><br />
              <span className="key">focus</span> = <span className="str">"python_backend"</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
