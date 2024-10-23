import React from 'react';
import Image from 'next/image';

const UserProgression: React.FC = () => {
  return (
    <div className="user-progression">
      <div className="user-points-progression">
        <div className="user-white-rectangle user-progression-rectangle">
          <h3 className="user-progression-text">Поени до следна рамка</h3>
          <div className="user-points-container">
            <div className="user-point">
              <div className="point-badge point-badge-blue user-progression-text">
                50
              </div>
            </div>
            <div className="user-point">
              <div className="point-badge point-badge-orange user-progression-text">
                50
              </div>
            </div>
            <div className="user-point">
              <div className="point-badge point-badge-bronze user-progression-text">
                50
              </div>
            </div>
          </div>
        </div>

        <div className="user-white-rectangle user-progression-rectangle">
          <div className="user-points-title-container">
            <h3 className="user-progression-text">Најнови беџови</h3>
            <a>Види ги сите</a>
          </div>
          <div className="user-level">
            <div className="level-items-container">
              <div className="level-icon level-icon-yellow">
                <Image
                  src="/icons/comment/comment.png"
                  alt="Comment Icon"
                  width={34}
                  height={34}
                />
              </div>

              <p className="level-text user-progression-small-text">
                <span className="user-progression-bold">Левел 2&nbsp;</span>
                беџ за активност во блог секцијата за корисници
              </p>
            </div>
          </div>
          <div className="user-level">
            <div className="level-items-container">
              <div className="level-icon level-icon-red">
                <Image
                  src="/icons/calendar/calendar.png"
                  alt="Calendar Icon"
                  width={36}
                  height={36}
                />
              </div>

              <p className="level-text user-progression-small-text">
                <span className="user-progression-bold">Левел 3&nbsp;</span>
                беџ за редовно посетување на настани
              </p>
            </div>
          </div>
        </div>

        <div className="user-white-rectangle user-progression-rectangle">
          <h3 className="user-progression-text">Листа на конекции</h3>
          <div className="user-add-a-connection">
            <span className="user-progression-small-text">
              Додади конекција
            </span>
            <input
              name="addConnection"
              id="addConnection"
              type="text"
              className="user-progression-small-text user-search-bar"
              placeholder="Пребарај"
            />
          </div>
          <div className="user-points-title-container">
            <span className="user-progression-bold">Последно додадени</span>
            <a>Види ги сите</a>
          </div>
          <div className="user-container-of-users">
            <div className="users-container">
              <div className="user">
                <Image
                  src="/images/user-progression/user-progression-image-01.png"
                  alt="User Image"
                  width={121.04}
                  height={124.04}
                />
                <p>Јована Б.</p>
              </div>
              <div className="user">
                <Image
                  src="/images/user-progression/user-progression-image-02.png"
                  alt="User Image"
                  width={119.83}
                  height={124.04}
                />
                <p>Влатко М.</p>
              </div>
              <div className="user">
                <Image
                  src="/images/user-progression/user-progression-image-03.png"
                  alt="User Image"
                  width={121.04}
                  height={124.04}
                />
                <p>Борче К.</p>
              </div>
            </div>
            <div className="users-container">
              <div className="user">
                <Image
                  src="/images/user-progression/user-progression-image-04.png"
                  alt="User Image"
                  width={121.04}
                  height={122.85}
                />
                <p>Јовче Ј.</p>
              </div>
              <div className="user">
                <Image
                  src="/images/user-progression/user-progression-image-05.png"
                  alt="User Image"
                  width={119.83}
                  height={122.85}
                />
                <p>Aнабела П.</p>
              </div>
              <div className="user">
                <Image
                  src="/images/user-progression/user-progression-image-06.png"
                  alt="User Image"
                  width={121.04}
                  height={122.85}
                />
                <p>Баже К.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-achievements-progression">
        <h2 className="conference-title">Купени карти</h2>
        <div className="user-white-rectangle user-progression-rectangle user-purchased-ticket">
          <Image
            src="/images/user-progression/user-purchased-ticket-01.png"
            alt="Event Ticket"
            width={145}
            height={156}
          />
          <div className="purchased-ticket-text">
            <p className="user-progression-text">
              <span className="user-progression-bold-2">HR кафе:&nbsp;</span>
              Пoтребата од зајакнување на соработ...
            </p>
            <span className="user-progression-small-text user-progression-bold">
              25.07.2024 Лабораториум, Скопје
            </span>
          </div>
        </div>
        <div className="user-purchased-ticket user-white-rectangle user-progression-rectangle">
          <Image
            src="/images/user-progression/user-purchased-ticket-02.png"
            alt="Event Ticket"
            width={145}
            height={156}
          />
          <div className="purchased-ticket-text">
            <p className="user-progression-text user-progression-bold-2">
              13та меѓународна МАЧР конференција
            </p>
            <span className="user-progression-small-text user-progression-bold">
              24-25.12.2024 Хотел Континентал, Скопје
            </span>
          </div>
        </div>
        <div className="user-percentage-container">
          <div className="user-percentage user-white-rectangle user-progression-rectangle">
            <p className="user-progression-text">Освоено:</p>
            <p className="user-progression-big-text">20&#37;</p>
            <span className="user-progression-text">
              попуст на следна карта
            </span>
          </div>
          <div className="user-percentage user-white-rectangle user-progression-rectangle">
            <p className="user-progression-text">Препорачано на:</p>
            <p className="user-progression-big-text">20</p>
            <span className="user-progression-text">пријатели</span>
          </div>
        </div>
        <div className="blog-post-add-comment user-send-a-suggestion">
          <div className="comment-input user-input user-progression-rectangle">
            <textarea
              placeholder="Остави фидбек за нешто што би можеле да подобриме на страната. Кажи ни што ти смета и ние ке се
              потрудиме да го подобриме."
            />
          </div>
          <div
            className="blog-post-comments-attach user-post-suggestion"
            style={{
              backgroundImage: `url('/images/user-progression/user-textarea-dots.png')`,
            }}
          >
            <button>Испрати</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProgression;
