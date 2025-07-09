import React, { useState, useRef, useEffect, useContext } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ChatContext } from "../context/ChatContext";
import clsx from "clsx";

const Sidebar = () => {
  const {
    getUsers,
    users,
    selectedUser,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages,
  } = useContext(ChatContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const filteredUsers = input
    ? users.filter((user) =>
        user.fullName.toLowerCase().includes(input.toLowerCase())
      )
    : users;

  const { logout, onlineUsers } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showMenu = isMenuOpen || isHovering;

  useEffect(() => {
    getUsers();
  }, [onlineUsers]);

  return (
    <div
      className={clsx(
        "bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white",
        selectedUser && "max-md:hidden"
      )}
    >
      {/* Header */}
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="logo" className="max-w-40" />

          {/* Menu */}
          <div
            ref={menuRef}
            className="relative py-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={assets.menu_icon}
              alt="Menu"
              className="max-h-5 cursor-pointer"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
            {showMenu && (
              <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100">
                <p
                  onClick={() => {
                    navigate("/profile");
                    setIsMenuOpen(false);
                  }}
                  className="cursor-pointer text-sm"
                >
                  Edit Profile
                </p>
                <hr className="my-2 border-t border-gray-500" />
                <p onClick={() => logout()} className="cursor-pointer text-sm">
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 flex items-center gap-2 px-2 py-1 bg-[#282142]/30 rounded-md">
          <img src={assets.search_icon} alt="search" className="w-3" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1"
            placeholder="Search User..."
          />
        </div>
      </div>

      {/* Users List */}
      <div className="flex flex-col">
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedUser(user);
              setUnseenMessages((prev) => ({ ...prev, [user._id]: 0 }));
            }}
            className={clsx(
              "relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm",
              selectedUser?._id === user._id && "bg-[#282142]/50"
            )}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt="avatar"
              className="w-[35px] aspect-[1/1] rounded-full"
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              <span
                className={clsx(
                  "text-xs",
                  onlineUsers.includes(user._id)
                    ? "text-green-400"
                    : "text-neutral-400"
                )}
              >
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </span>
            </div>
            {unseenMessages[user._id] > 0 && (
              <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50">
                {unseenMessages[user._id]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
