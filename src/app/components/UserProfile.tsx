'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CustomAlert from './CustomAlert';

const UserProfile: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showProfileEditPopup, setShowProfileEditPopup] =
    useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const storedFirstName = sessionStorage.getItem('firstName') || 'Валентина';
    const storedSurname = sessionStorage.getItem('surname') || 'С.';
    const storedEmail =
      sessionStorage.getItem('email') || 'vstojanova@hotmail.com';
    const storedPhone = sessionStorage.getItem('phone') || '+389 70 481 440';
    const storedProfession =
      sessionStorage.getItem('profession') || 'HR регрутер';
    const storedPassword = sessionStorage.getItem('password') || '';
    const storedNotifications = JSON.parse(
      sessionStorage.getItem('notifications') || '[]'
    );

    setFirstName(storedFirstName);
    setSurname(storedSurname);
    setEmail(storedEmail);
    setPhone(storedPhone);
    setProfession(storedProfession);
    setPassword(storedPassword);
    setNotifications(storedNotifications);
  }, []);

  const handleSaveProfile = () => {
    sessionStorage.setItem('firstName', firstName);
    sessionStorage.setItem('surname', surname);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('profession', profession);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('notifications', JSON.stringify(notifications));

    setShowProfileEditPopup(false);
  };

  const toggleNotification = (type: string) => {
    if (notifications.includes(type)) {
      setNotifications(notifications.filter((item) => item !== type));
    } else {
      setNotifications([...notifications, type]);
    }
  };

  const handleEndorsementAlert = () => {
    setShowAlert(true);
  };

  const handleProfileChange = () => {
    setShowProfileEditPopup(true);
  };

  const displayedSurname = surname.length > 1 ? `${surname[0]}.` : surname;

  return (
    <div className="user-profile">
      <div className="user-profile-info user-white-rectangle">
        <div className="user-profile-img-and-name-and-birth-city">
          <div
            className="user-profile-img"
            style={{
              backgroundImage: `url('/images/user-profile/user-profile-image.png')`,
            }}
          ></div>
          <p className="user-name user-profile-title">
            {firstName} {displayedSurname}
          </p>
          <span className="user-city user-profile-text-small">Битола</span>
        </div>
        <div className="user-properties-line"></div>
        <div className="user-properties">
          <div className="user-property">
            <Image
              src="/icons/person/person.png"
              alt="Person"
              width={20}
              height={20}
            />
            <span className="user-profile-text-small">{profession}</span>
          </div>
          <div className="user-property">
            <Image
              src="/icons/attach.png"
              alt="Attach Icon"
              width={17}
              height={20}
            />
            <a
              className="user-profile-text-small"
              onClick={handleEndorsementAlert}
            >
              CV
            </a>
          </div>
          <div className="user-properties-line"></div>
          <div className="user-property">
            <Image src="/icons/phone.png" alt="Phone" width={27} height={19} />
            <span className="user-profile-text-small">{phone}</span>
          </div>
          <div className="user-property">
            <Image src="/icons/email.png" alt="Email" width={25} height={20} />
            <span className="user-profile-text-small">{email}</span>
          </div>
          <div className="user-property">
            <Image
              src="/icons/settings.png"
              alt="Settings"
              width={22}
              height={22}
            />
            <a
              className="user-profile-text-small"
              onClick={handleProfileChange}
            >
              Поставки
            </a>
          </div>
        </div>
        <Image
          src="/icons/message.png"
          alt="Message Icon"
          width={44}
          height={44}
          className="user-message-icon"
          onClick={handleEndorsementAlert}
        />
      </div>
      <div className="user-profile-about">
        <h2 className="user-profile-title">Кратка Биографија</h2>
        <div className="user-profile-bio user-profile-text-medium">
          Јас сум Валентина Стојанова, искусен HR регрутер со над 10 години
          работно искуство во полето на човечките ресурси. Својата кариера ја
          започнав како помлад HR асистент и со текот на годините напредував,
          стекнувајќи богато знаење и вештини во регрутирањето и управувањето со
          таленти. Позната сум по мојот професионализам, одлична комуникација и
          способност да пронајдам и привлечам врвни таленти за различни
          индустрии. Работев со големи компании, помагајќи им да изградат силни
          и ефикасни тимови. Со посветеност кон мојата професија и постојана
          желба за усовршување, се стремам да бидам лидер и ментор во областа на
          HR.
        </div>
        <h3 className="user-profile-title">Препораки</h3>
        <div className="user-profile-endorsement">
          <div className="person-that-endorsed">
            <Image
              src="/images/blog-comments/blog-comments-image-02.png"
              alt="Person"
              width={69}
              height={64.5}
            />
            <div className="endorsement-name-and-time">
              <h4 className="user-profile-title">Фрањо</h4>
              <span className="user-profile-text-gray">Пред 9 минути</span>
            </div>
          </div>
          <p className="user-profile-text-medium">
            Со задоволство ја препорачувам Валентина како извонреден HR
            регрутер. Нејзината способност да идентификува и привлече врвни
            таленти е ненадмината.
          </p>
        </div>
        <div className="user-profile-endorsement">
          <div className="person-that-endorsed">
            <Image
              src="/images/blog-comments/blog-comments-image-03.png"
              alt="Person"
              width={69}
              height={64.5}
            />
            <div className="endorsement-name-and-time">
              <h4 className="user-profile-title">Бобан</h4>
              <span className="user-profile-text-gray">Пред 9 минути</span>
            </div>
          </div>
          <p className="user-profile-text-medium">
            Валентина е извонреден HR професионалец кој постојано покажува
            посветеност и страст кон својата работа. Со нејзината способност да
            препознае и регрутира талентирани индивидуи, таа ни помогна да
            изградиме силни и успешни тимови.
          </p>
        </div>
        <a
          className="user-profile-see-more user-profile-text-gray"
          onClick={handleEndorsementAlert}
        >
          Види ги сите
        </a>
      </div>

      {showAlert && <CustomAlert onClose={() => setShowAlert(false)} />}

      {showProfileEditPopup && (
        <div className="page-blur-overlay">
          <div className="profile-edit-popup">
            <div className="pop-up-title">
              <h3 className="user-progression-text">Поставки</h3>
              <Image
                src="/icons/x.png"
                alt="Close"
                className="pop-upclose-icon"
                width={20.35}
                height={20.35}
                onClick={() => setShowProfileEditPopup(false)}
              />
            </div>
            <div className="profile-edit-content">
              <div className="profile-edit-form">
                <div className="profile-edit-input">
                  <label htmlFor="name">Име</label>
                  <input
                    type="text"
                    placeholder="Име"
                    name="name"
                    id="name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="profile-edit-input">
                  <label htmlFor="email">Е-маил</label>
                  <input
                    type="email"
                    placeholder="Е-маил"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="profile-edit-input">
                  <label htmlFor="password">Лозинка</label>
                  <input
                    type="text"
                    placeholder="Промени Лозинка"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="profile-edit-input">
                  <label htmlFor="profession">Професија</label>
                  <input
                    type="text"
                    placeholder="Професија"
                    value={profession}
                    name="profession"
                    id="profession"
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile-edit-form">
                <div className="profile-edit-input">
                  <label htmlFor="surname">Презиме</label>
                  <input
                    type="text"
                    placeholder="Презиме"
                    id="surname"
                    name="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
                <h4>Добиј нотификации на:</h4>
                <div className="profile-edit-checkbox">
                  <input
                    type="checkbox"
                    checked={notifications.includes('Платформа')}
                    name="forPlatform"
                    id="forPlatform"
                    onChange={() => toggleNotification('Платформа')}
                  />
                  <label htmlFor="forPlatform">Платформа</label>
                </div>
                <div className="profile-edit-checkbox">
                  <input
                    type="checkbox"
                    id="forEmail"
                    name="forEmail"
                    checked={notifications.includes('Е-маил')}
                    onChange={() => toggleNotification('Е-маил')}
                  />
                  <label htmlFor="forEmail">Е-маил</label>
                </div>
                <div className="profile-edit-checkbox margin-bottom-none">
                  <input
                    type="checkbox"
                    name="forSocialMedia"
                    id="forSocialMedia"
                    checked={notifications.includes('Социјални медиуми')}
                    onChange={() => toggleNotification('Социјални медиуми')}
                  />
                  <label htmlFor="forSocialMedia">Социјални медиуми</label>
                </div>
                <h4>Добиј нотификации за:</h4>
                <div className="profile-edit-checkbox">
                  <input
                    type="checkbox"
                    name="forNewContent"
                    id="forNewContent"
                    checked={notifications.includes('Нови содржини')}
                    onChange={() => toggleNotification('Нови содржини')}
                  />
                  <label htmlFor="forNewContent">Нови содржини</label>
                </div>
                <div className="profile-edit-checkbox">
                  <input
                    type="checkbox"
                    name="forNewEvents"
                    id="forNewEvents"
                    checked={notifications.includes('Нови настани')}
                    onChange={() => toggleNotification('Нови настани')}
                  />
                  <label htmlFor="forNewEvents">Нови настани</label>
                </div>
                <div className="profile-edit-checkbox margin-bottom-none">
                  <input
                    type="checkbox"
                    name="forEventDate"
                    id="forEventDate"
                    checked={notifications.includes(
                      'Приближување на датум за настан'
                    )}
                    onChange={() =>
                      toggleNotification('Приближување на датум за настан')
                    }
                  />
                  <label htmlFor="forEventDate">
                    Приближување на датум за настан
                  </label>
                </div>
              </div>
            </div>
            <button onClick={handleSaveProfile} className="edit-form-button">
              Зачувај
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
